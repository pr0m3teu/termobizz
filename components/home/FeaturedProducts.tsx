type FeaturedProduct = {
  id: number;
  title: string;
  category: string;
  highlight: string;
};

const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    title: "Relee statice monofazate - SSR",
    category: "Relee & contactoare statice",
    highlight:
      "Metoda trecerii prin zero, semnal de comanda standard, special pentru sarcini rezistive.",
  },
  {
    id: 2,
    title: "Contactoare statice monofazate",
    category: "Relee & contactoare statice",
    highlight:
      "Sigurante rapide, protectie la supracurent si supratensiune, indicare LED.",
  },
  {
    id: 3,
    title: "Relee statice trifazate - TSR",
    category: "Relee & contactoare statice",
    highlight:
      "Control prin trecere prin zero, semnal de control 4 ÷ 32 Vcc sau 8 ÷ 250 Vca.",
  },
  {
    id: 4,
    title: "Accesorii pentru relee statice",
    category: "Accesorii",
    highlight:
      "Radiatoare din aluminiu, capace de protectie si folie tampon pentru montaj.",
  },
];

export function FeaturedProducts() {
  return (
    <section className="border-b bg-white">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              Promotii &amp; produse recomandate
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900 md:text-3xl">
              Selectie de produse
            </h2>
          </div>
          <button className="inline-flex w-fit items-center rounded border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-sky-700 hover:text-sky-800">
            Vezi toate promotiile
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm shadow-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-700">
                {product.category}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                {product.title}
              </h3>
              <p className="mt-2 flex-1 text-xs text-slate-600">
                {product.highlight}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="inline-flex flex-1 items-center justify-center rounded bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-sky-700">
                  Vezi produs
                </button>
                <button className="inline-flex flex-1 items-center justify-center rounded border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-sky-700 hover:text-sky-800">
                  Cere oferta
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

