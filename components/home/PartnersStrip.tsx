const partners = [
  "Partener industrial A",
  "Partener industrial B",
  "Partener integrator C",
  "Partener OEM D",
  "Partener OEM E",
];

export function PartnersStrip() {
  return (
    <section className="border-b bg-slate-50">
      <div className="container mx-auto px-4 py-10 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              Parteneri
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Branduri si producatori reprezentati
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-600">
            Placeholder pentru logouri sau lista de parteneri oficiali /
            producatori pe care ii reprezentati pe piata locala.
          </p>
        </div>

        <div className="mt-6 grid gap-3 text-xs text-slate-600 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded border border-dashed border-slate-300 bg-white px-3 py-4 text-center"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

