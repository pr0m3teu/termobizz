import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllProductParams, findProductBySlugs } from "@/lib/products";

export async function generateStaticParams() {
  const params = await getAllProductParams();
  return params.map(({ parent, child, product }) => ({
    parent,
    child,
    product,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    parent: string;
    child: string;
    product: string;
  }>;
}): Promise<Metadata> {
  const { parent, child, product } = await params;
  const productData = await findProductBySlugs(parent, child, product);

  if (!productData) {
    return {
      title: "Produs inexistent | TermoBizz",
    };
  }

  return {
    title: `${productData.productName} | ${productData.childName} | TermoBizz`,
    description: `Specificatii si detalii pentru ${productData.productName}. Cere o oferta personalizata.`,
  };
}

export default async function ProductPage(props: {
  params: Promise<{
    parent: string;
    child: string;
    product: string;
  }>;
}) {
  const { parent, child, product } = await props.params;

  const currentProduct = await findProductBySlugs(parent, child, product);
  if (!currentProduct) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="mb-4 text-xs font-medium uppercase tracking-wide text-sky-700">
            {currentProduct.parentName} / {currentProduct.childName}
          </div>
          <h1 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            {currentProduct.productName}
          </h1>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
            <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-md bg-slate-200">
                <Image
                  src={currentProduct.imagePath}
                  alt={currentProduct.productName}
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
                  Placeholder pentru descriere detaliata a produsului. Aici veti
                  putea include ulterior continut redactat in format Markdown:
                  caracteristici tehnice, aplicatii tipice, optiuni constructive
                  si exemple de utilizare.
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

