type Category = {
  id: number;
  name: string;
  description: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Rezistente electrice",
    description:
      "Rezistente cartus, banda, inelare, tubulare si solutii custom pentru aplicatii industriale.",
  },
  {
    id: 2,
    name: "Senzori de temperatura",
    description:
      "Termocupluri, termorezistente si senzori speciali pentru intervale largi de temperatura.",
  },
  {
    id: 3,
    name: "Reglare si control",
    description:
      "Regulatoare de temperatura, controlere PID, instrumente de panou si accesorii.",
  },
  {
    id: 4,
    name: "Relee & contactoare statice",
    description:
      "Relee si contactoare statice monofazate si trifazate, accesorii si radiatoare.",
  },
  {
    id: 5,
    name: "Solutii complete",
    description:
      "Ansambluri si subansamble gata de integrat in echipamentele de productie.",
  },
  {
    id: 6,
    name: "Servicii & consultanta",
    description:
      "Suport tehnic la selectie, dimensionare si integrare in procesele existente.",
  },
];

export function ProductCategories() {
  return (
    <section className="border-b bg-slate-50">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              Gama de produse
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900 md:text-3xl">
              Categorii principale
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">
            Placeholder pentru text de introducere a gamelor de produse:
            prezentarea principalelor familii si a modului in care sunt
            structurate in catalogul online.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.id}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {category.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                {category.description}
              </p>
              <button className="mt-4 inline-flex w-fit text-xs font-semibold text-sky-700 underline-offset-2 hover:underline">
                Vezi detalii categorie
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

