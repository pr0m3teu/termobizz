import fs from "fs/promises";
import path from "path";
import { cache } from "react";

const PUBLIC_DIR = path.join(process.cwd(), "public");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

export type ProductImage = {
  slug: string;
  name: string;
  imagePath: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  products: ProductImage[];
};

function humanizeSlug(slug: string): string {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

async function directoryExists(dir: string): Promise<boolean> {
  try {
    const stat = await fs.stat(dir);
    return stat.isDirectory();
  } catch {
    return false;
  }
}
type ProductsRoot = {
  fsPath: string;
  urlBasePath: string;
};

const getProductsRootDir = cache(async (): Promise<ProductsRoot | null> => {
  // 1) Preferred: /public/produse
  const defaultFsPath = path.join(PUBLIC_DIR, "produse");
  if (await directoryExists(defaultFsPath)) {
    return {
      fsPath: defaultFsPath,
      urlBasePath: "/produse",
    };
  }

  // 2) Fallback: any directory under /public whose name starts with "produse"
  const publicExists = await directoryExists(PUBLIC_DIR);
  if (!publicExists) {
    return null;
  }

  const publicEntries = await fs.readdir(PUBLIC_DIR, { withFileTypes: true });
  const candidate = publicEntries.find(
    (entry) => entry.isDirectory() && entry.name.startsWith("produse"),
  );

  if (!candidate) {
    return null;
  }

  const candidateFsPath = path.join(PUBLIC_DIR, candidate.name);
  return {
    fsPath: candidateFsPath,
    urlBasePath: `/${candidate.name}`,
  };
});

export const getAllCategories = cache(
  async (): Promise<ProductCategory[]> => {
    const root = await getProductsRootDir();
    if (!root) {
      return [];
    }

    const categoryEntries = await fs.readdir(root.fsPath, {
      withFileTypes: true,
    });

    const categories: ProductCategory[] = [];

    for (const entry of categoryEntries) {
      if (!entry.isDirectory()) continue;

      const categorySlug = entry.name;
      const categoryPath = path.join(root.fsPath, categorySlug);
      const productEntries = await fs.readdir(categoryPath, {
        withFileTypes: true,
      });

      const products: ProductImage[] = productEntries
        .filter(
          (productEntry) =>
            productEntry.isFile() &&
            IMAGE_EXTENSIONS.includes(
              path.extname(productEntry.name).toLowerCase(),
            ),
        )
        .map((fileEntry) => {
          const fileName = fileEntry.name;
          const productSlug = path.basename(fileName, path.extname(fileName));

          return {
            slug: productSlug,
            name: humanizeSlug(productSlug),
            imagePath: `${root.urlBasePath}/${categorySlug}/${fileName}`,
          };
        });

      categories.push({
        slug: categorySlug,
        name: humanizeSlug(categorySlug),
        products,
      });
    }

    return categories;
  },
);

export async function getAllProductParams(): Promise<
  { category: string; product: string }[]
> {
  const categories = await getAllCategories();
  const params: { category: string; product: string }[] = [];

  for (const category of categories) {
    for (const product of category.products) {
      params.push({ category: category.slug, product: product.slug });
    }
  }

  return params;
}

export async function getProductBySlugs(
  categorySlug: string,
  productSlug: string,
): Promise<
  | (ProductImage & {
      categorySlug: string;
      categoryName: string;
    })
  | null
> {
  const categories = await getAllCategories();
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return null;

  const product = category.products.find((p) => p.slug === productSlug);
  if (!product) return null;

  return {
    ...product,
    categorySlug: category.slug,
    categoryName: category.name,
  };
}

