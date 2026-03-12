import Image from "next/image";
import Link from "next/link";
import { getProductsTree } from "@/lib/products";

export async function FeaturedProducts() {
  const tree = await getProductsTree();
  const allProducts = tree.flatMap((parent) =>
    parent.children.flatMap((child) => child.products),
  );

  const featured = allProducts.slice(0, 8);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="border-b bg-white">
      <div className="container mx-auto px-4 py-10 lg:px-8 lg:py-14">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
              Promotii &amp; produse recomandate
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900 md:text-2xl">
              Selectie rapida de produse
            </h2>
          </div>
          <Link
            href="/produse"
            className="inline-flex w-fit items-center rounded border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-sky-700 hover:text-sky-800"
          >
            Vezi toate produsele
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => {
            const parentSegment = encodeURIComponent(product.parentSlug);
            const childSegment = encodeURIComponent(product.childSlug);
            const productSegment = encodeURIComponent(product.productSlug);

            return (
              <Link
                key={`${product.parentSlug}-${product.childSlug}-${product.productSlug}`}
                href={`/produse/${parentSegment}/${childSegment}/${productSegment}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-slate-50 text-xs shadow-sm transition hover:-translate-y-0.5 hover:border-sky-600 hover:shadow-md"
              >
                <div className="relative w-full bg-slate-100">
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={product.imagePath}
                      alt={product.productName}
                      fill
                      sizes="(min-width: 1024px) 240px, 50vw"
                      className="object-contain p-3"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 px-3 py-3">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-sky-700 line-clamp-1">
                    {product.parentName} / {product.childName}
                  </p>
                  <h3 className="line-clamp-2 text-xs font-semibold text-slate-900">
                    {product.productName}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

