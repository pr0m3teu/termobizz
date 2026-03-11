import Link from "next/link";

const productColumns = [
  {
    title: "Elemente de incalzire",
    links: [
      "Rezistente cartus",
      "Rezistente banda",
      "Rezistente inelare",
      "Rezistente tubulare",
    ],
  },
  {
    title: "Masura & control",
    links: [
      "Termorezistente",
      "Termocupluri",
      "Regulatoare de temperatura",
      "Relee si contactoare statice",
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-200">
      <div className="container mx-auto grid gap-10 px-4 py-12 lg:grid-cols-[2fr,3fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-600 text-white">
              <span className="text-lg font-bold">TB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">
                TermoBizz
              </span>
              <span className="text-xs text-slate-400">
                Solutii profesionale pentru incalzire industriala
              </span>
            </div>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Placeholder pentru scurta descriere a companiei, portofoliu de
            produse si experienta in aplicatii industriale critice.
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-slate-300">
              Str. Exemplu nr. 123, Bucuresti, Romania
            </p>
            <p className="text-slate-300">Tel: +40 (0)000 000 000</p>
            <p className="text-slate-300">Email: office@termobizz.ro</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {productColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                {column.title}
              </h3>
              <ul className="space-y-1 text-sm text-slate-400">
                {column.links.map((label) => (
                  <li key={label}>
                    <button className="text-left transition hover:text-sky-400">
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Navigatie
            </h3>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>
                <Link href="/despre-noi" className="hover:text-sky-400">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/promotii" className="hover:text-sky-400">
                  Promotii
                </Link>
              </li>
              <li>
                <Link href="/parteneri" className="hover:text-sky-400">
                  Parteneri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 text-xs text-slate-500 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} TermoBizz. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}

