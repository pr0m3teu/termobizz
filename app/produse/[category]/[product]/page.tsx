import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductSidebar } from "@/components/ProductSidebar";
import {
  getAllCategories,
  getAllProductParams,
  getProductBySlugs,
} from "@/lib/products";

type PageProps = {
  params: {
    category: string;
    product: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<PageProps["params"]>;
}): Promise<Metadata> {
  const { category, product } = await params;
  const productData = await getProductBySlugs(category, product);

  if (!productData) {
    return {
      title: "Produs inexistent | TermoBizz",
    };
  }

  return {
    title: `${productData.name} | ${productData.categoryName} | TermoBizz`,
    description: `Specificatii si detalii pentru ${productData.name}. Cere o oferta personalizata.`,
  };
}

export async function generateStaticParams() {
  const params = await getAllProductParams();
  return params.map(({ category, product }) => ({
    category,
    product,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { category, product } = params;

  const [currentProduct, categories] = await Promise.all([
    getProductBySlugs(category, product),
    getAllCategories(),
  ]);

  if (!currentProduct) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="container mx-auto grid gap-8 px-4 py-8 lg:grid-cols-[280px,1fr] lg:px-8 lg:py-12">
        <div className="order-2 lg:order-1">
          <ProductSidebar
            categories={categories}
            activeCategorySlug={category}
            activeProductSlug={product}
          />
        </div>

        <section className="order-1 rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:order-2">
          <div className="mb-4 text-xs font-medium uppercase tracking-wide text-sky-700">
            {currentProduct.categoryName}
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            {currentProduct.name}
          </h1>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
            <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-md bg-slate-200">
                <Image
                  src={currentProduct.imagePath}
                  alt={currentProduct.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 640px, 100vw"
                />
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Descriere produs
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Placeholder pentru descriere detaliata a produsului. Aici
                  veti putea include ulterior continut redactat in format
                  Markdown: caracteristici tehnice, aplicatii tipice, optiuni
                  constructive si exemple de utilizare.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Specificatii principale
                </h2>
                <ul className="mt-2 grid list-disc gap-x-6 gap-y-1 pl-5 text-sm text-slate-600 md:grid-cols-2">
                  <li>Loc pentru principalele caracteristici tehnice</li>
                  <li>Domeniu de temperatura / sarcina</li>
                  <li>Optiuni de conectare si montaj</li>
                  <li>Compatibilitate cu alte echipamente</li>
                </ul>
              </div>

              <div className="pt-4">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Documentatie &amp; resurse
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Zona pentru link-uri catre fise tehnice, cataloage PDF sau
                  alte resurse suport. Puteti completa ulterior cu link-uri
                  reale.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
            <p className="text-xs text-slate-500">
              Pentru oferte personalizate, configurari speciale sau suport
              tehnic privind selectia produsului, puteti trimite o cerere
              directa catre echipa TermoBizz.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Cere oferta
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

