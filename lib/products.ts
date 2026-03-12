import fs from "fs/promises";
import path from "path";
import { cache } from "react";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const PRODUCTS_ROOT_DIR = path.join(PUBLIC_DIR, "produse_site");
const PRODUCTS_ROOT_URL = "/produse_site";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

function humanize(text: string): string {
  return text
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

function createSlug(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

async function directoryExists(dir: string): Promise<boolean> {
  try {
    const stat = await fs.stat(dir);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

export type ProductNode = {
  parentDir: string;
  childDir: string;
  fileName: string;
  parentName: string;
  childName: string;
  productName: string;
  parentSlug: string;
  childSlug: string;
  productSlug: string;
  imagePath: string;
};

export type ChildCategory = {
  dirName: string;
  name: string;
  slug: string;
  products: ProductNode[];
};

export type ParentCategory = {
  dirName: string;
  name: string;
  slug: string;
  children: ChildCategory[];
};

export const getProductsTree = cache(
  async (): Promise<ParentCategory[]> => {
    const exists = await directoryExists(PRODUCTS_ROOT_DIR);
    if (!exists) {
      return [];
    }

    const parentEntries = await fs.readdir(PRODUCTS_ROOT_DIR, {
      withFileTypes: true,
    });

    const parents: ParentCategory[] = [];

    for (const parentEntry of parentEntries) {
      if (!parentEntry.isDirectory()) continue;

      const parentDir = parentEntry.name;
      const parentPath = path.join(PRODUCTS_ROOT_DIR, parentDir);
      const parentSlug = createSlug(parentDir);

      const childEntries = await fs.readdir(parentPath, {
        withFileTypes: true,
      });

      const children: ChildCategory[] = [];

      for (const childEntry of childEntries) {
        if (!childEntry.isDirectory()) continue;

        const childDir = childEntry.name;
        const childPath = path.join(parentPath, childDir);
        const childSlug = createSlug(childDir);

        const productEntries = await fs.readdir(childPath, {
          withFileTypes: true,
        });

        const products: ProductNode[] = productEntries
          .filter(
            (entry) =>
              entry.isFile() &&
              IMAGE_EXTENSIONS.includes(
                path.extname(entry.name).toLowerCase(),
              ),
          )
          .map((fileEntry) => {
            const fileName = fileEntry.name;
            const baseName = path.basename(fileName, path.extname(fileName));
            const productSlug = createSlug(baseName);

            const encodedParent = encodeURIComponent(parentDir);
            const encodedChild = encodeURIComponent(childDir);
            const encodedFile = encodeURIComponent(fileName);

            return {
              parentDir,
              childDir,
              fileName,
              parentName: humanize(parentDir),
              childName: humanize(childDir),
              productName: humanize(baseName),
              parentSlug,
              childSlug,
              productSlug,
              imagePath: `${PRODUCTS_ROOT_URL}/${encodedParent}/${encodedChild}/${encodedFile}`,
            };
          });

        if (products.length > 0) {
          children.push({
            dirName: childDir,
            name: humanize(childDir),
            slug: childSlug,
            products,
          });
        }
      }

      if (children.length > 0) {
        parents.push({
          dirName: parentDir,
          name: humanize(parentDir),
          slug: parentSlug,
          children,
        });
      }
    }

    return parents;
  },
);

export async function getAllProductParams(): Promise<
  { parent: string; child: string; product: string }[]
> {
  const tree = await getProductsTree();
  const params: { parent: string; child: string; product: string }[] = [];

  for (const parent of tree) {
    for (const child of parent.children) {
      for (const product of child.products) {
        params.push({
          parent: parent.slug,
          child: child.slug,
          product: product.productSlug,
        });
      }
    }
  }

  return params;
}

export async function findProductBySlugs(
  parentSlug: string,
  childSlug: string,
  productSlug: string,
): Promise<ProductNode | null> {
  const tree = await getProductsTree();

  for (const parent of tree) {
    if (parent.slug !== parentSlug) continue;

    for (const child of parent.children) {
      if (child.slug !== childSlug) continue;

      const product = child.products.find(
        (p) => p.productSlug === productSlug,
      );
      if (product) {
        return product;
      }
    }
  }

  return null;
}

