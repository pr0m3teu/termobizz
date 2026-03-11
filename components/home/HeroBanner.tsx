import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="border-b bg-slate-950 text-slate-50">
      <div className="container mx-auto grid gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-300">
            Solutii pentru incalzire industriala
          </p>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Elemente de incalzire si senzori pentru aplicatii industriale
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              Placeholder pentru un scurt mesaj comercial: gama completa de
              rezistente electrice, traductoare si echipamente de control
              adaptate cerintelor liniilor dumneavoastra de productie.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/produse"
              className="inline-flex items-center rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              Vezi gama de produse
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-500 hover:text-sky-300"
            >
              Cere oferta personalizata
            </Link>
          </div>
          <dl className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-slate-100">15+ ani</dt>
              <dd>Experienta in aplicatii industriale</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-100">Portofoliu</dt>
              <dd>Solutii pentru industrii diverse</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-100">Suport tehnic</dt>
              <dd>Consultanta la selectie si integrare</dd>
            </div>
          </dl>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="h-32 rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                Elemente de incalzire
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Rezistente cartus, banda, inelare, tubulare.
              </p>
            </div>
            <div className="h-32 rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                Masura &amp; control
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Termocupluri, termorezistente, regulatoare, relee statice.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-32 rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
                Aplicatii speciale
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Solutii configurate pentru cerinte specifice.
              </p>
            </div>
            <div className="h-32 rounded-lg border border-dashed border-slate-700 bg-slate-900/60 p-4 text-xs text-slate-400">
              Zona pentru vizual placeholder (imagine tehnica, schema sau
              fotografie produs).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

