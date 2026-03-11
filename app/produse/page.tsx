import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductSidebar } from "@/components/ProductSidebar";
import { getAllCategories } from "@/lib/products";

const PAGE_SIZE = 12;

export default async function ProductsPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const categories = await getAllCategories();

  const allProducts = categories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categorySlug: category.slug,
      categoryName: category.name,
    })),
  );

  const totalProducts = allProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalProducts / PAGE_SIZE));

  const currentPage = (() => {
    const pageParam = searchParams?.page;
    const pageValue = Array.isArray(pageParam) ? pageParam[0] : pageParam;
    const parsed = pageValue ? Number.parseInt(pageValue, 10) : 1;
    if (Number.isNaN(parsed) || parsed < 1) return 1;
    if (parsed > totalPages) return totalPages;
    return parsed;
  })();

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedProducts = allProducts.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="container mx-auto grid gap-8 px-4 py-8 lg:grid-cols-[280px,1fr] lg:px-8 lg:py-12">
        <div>
          <ProductSidebar categories={categories} />
        </div>

        <section className="space-y-6">
          <header className="flex flex-col gap-2 border-b border-slate-200 pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                Catalog produse
              </p>
              <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Toata gama de produse
              </h1>
            </div>
            <p className="text-xs text-slate-500">
              {totalProducts} produse in {categories.length} categorii
            </p>
          </header>

          {totalProducts === 0 ? (
            <p className="text-sm text-slate-600">
              Nu au fost gasite produse. Verificati structura din directorul{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                public/produse
              </code>
              .
            </p>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <Link
                    key={`${product.categorySlug}-${product.slug}`}
                    href={`/produse/${product.categorySlug}/${product.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] w-full bg-slate-100">
                      <Image
                        src={product.imagePath}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition group-hover:scale-[1.02]"
                        sizes="(min-width: 1280px) 260px, (min-width: 1024px) 220px, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1 px-3 py-3">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-sky-700">
                        {product.categoryName}
                      </p>
                      <h2 className="line-clamp-2 text-sm font-semibold text-slate-900">
                        {product.name}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <nav className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span>
                      Pagina {currentPage} din {totalPages}
                    </span>
                    <span className="text-slate-400">
                      · Afisate {paginatedProducts.length} produse
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PaginationLink
                      page={currentPage - 1}
                      disabled={currentPage === 1}
                      label="Inapoi"
                    />
                    {Array.from({ length: totalPages }, (_, index) => {
                      const page = index + 1;
                      return (
                        <PaginationLink
                          key={page}
                          page={page}
                          isActive={page === currentPage}
                          label={page.toString()}
                        />
                      );
                    })}
                    <PaginationLink
                      page={currentPage + 1}
                      disabled={currentPage === totalPages}
                      label="Inainte"
                    />
                  </div>
                </nav>
              )}
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

type PaginationLinkProps = {
  page: number;
  label: string;
  disabled?: boolean;
  isActive?: boolean;
};

function PaginationLink({
  page,
  label,
  disabled,
  isActive,
}: PaginationLinkProps) {
  if (disabled) {
    return (
      <span className="inline-flex min-w-[2.25rem] items-center justify-center rounded border border-transparent px-2 py-1 text-slate-400">
        {label}
      </span>
    );
  }

  const href = page === 1 ? "/produse" : `/produse?page=${page}`;

  return (
    <Link
      href={href}
      className={`inline-flex min-w-[2.25rem] items-center justify-center rounded border px-2 py-1 text-xs transition ${
        isActive
          ? "border-sky-600 bg-sky-600 text-white"
          : "border-slate-200 bg-white text-slate-700 hover:border-sky-600 hover:text-sky-800"
      }`}
    >
      {label}
    </Link>
  );
}

