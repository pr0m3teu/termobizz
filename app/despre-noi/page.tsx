import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="container mx-auto px-4 py-10 lg:px-8 lg:py-16">
        {/* Hero / Intro */}
        <section className="mb-12 rounded-2xl bg-slate-950 px-6 py-10 text-slate-50 shadow-sm lg:px-10 lg:py-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Despre noi
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Digital Company S.R.L – solutii complete pentru masurare si
              control industrial
            </h1>
            <p className="text-sm text-slate-200 md:text-base">
              Infiintata in 2003 la Pascani, judetul Iasi, Digital Company S.R.L
              este principalul producator roman de rezistente electrice de
              incalzire si traductoare de temperatura, cu un portofoliu extins
              de echipamente si servicii pentru automatizari industriale.
            </p>
          </div>
        </section>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)]">
          {/* Story & Mission */}
          <section className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                Cine suntem
              </h2>
              <p className="text-sm leading-relaxed text-slate-700">
                Digital Company S.R.L a fost infiintata in anul 2003 cu capital
                privat romanesc si este situata in Pascani, judetul Iasi.
                Societatea isi desfasoara activitatea la punctul de lucru din
                str. Abator, nr. 2, mun. Pascani.
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Suntem principalul producator de{" "}
                <span className="font-semibold">
                  rezistente electrice de incalzire
                </span>{" "}
                si{" "}
                <span className="font-semibold">
                  traductoare de temperatura
                </span>
                , oferind solutii adaptate cerintelor aplicatiilor industriale
                moderne.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Elemente de incalzire produse
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  <li>• incalzitoare electrice tip cartus / patron</li>
                  <li>• rezistente banda cu micanita sau ceramica</li>
                  <li>• rezistente tubulare drepte sau indoite</li>
                  <li>• rezistente de imersie cu flansa sau niplu filetat</li>
                  <li>• sisteme de incalzire in pardoseala</li>
                </ul>
              </article>

              <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Traductoare de temperatura
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  Producem o gama larga de traductoare:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• termorezistente Pt100</li>
                  <li>• termocupluri tip K, J, S, B, N, L, T</li>
                  <li>
                    • executii standard (normale, miniatura, cu cot, izolatie
                    minerala, pentru presiuni inalte etc.)
                  </li>
                  <li>• solutii personalizate, conform cerintelor clientului</li>
                </ul>
              </article>
            </div>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Servicii de proiectare si executie
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Oferim servicii complete de proiectare si realizare de solutii
                pentru automatizari si control de proces:
              </p>
              <ul className="mt-3 grid gap-x-8 gap-y-1 text-sm text-slate-700 md:grid-cols-2">
                <li>
                  • monitorizarea si controlul temperaturii, umiditatii si
                  presiunii in procese industriale sau depozite
                </li>
                <li>
                  • aplicatii de monitorizare si control cu software SCADA
                </li>
                <li>• tablouri de automatizare pentru procese industriale</li>
                <li>• cuptoare electrice si automatizari industriale</li>
                <li>• modernizari de tablouri de automatizare existente</li>
              </ul>
            </section>
          </section>

          {/* Sidebar: Partners, Certifications, Contact */}
          <aside className="space-y-6">
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Parteneriate internationale
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Suntem distribuitor autorizat pentru o serie de producatori
                internationali, asigurand o gama larga de echipamente pentru
                automatizari industriale:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                <li>• DATEXEL S.R.L.</li>
                <li>• SIELCO SISTEMI S.R.L.</li>
                <li>• SUKU Druck- und Temperaturmesstechnik GmbH</li>
                <li>• PALMER WAHL Instrumentation Group</li>
                <li>• BD Sensors s.r.o.</li>
              </ul>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Calitate si certificari
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Societatea noastra a implementat un sistem de management al
                calitatii in conformitate cu standardul european{" "}
                <span className="font-semibold">SR EN ISO 9001:2008</span>,
                atestat din 20.12.2010 prin certificatul nr. 381-C emis de
                organismul specializat GCSM.
              </p>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Echipamente livrabile din stoc
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Detinem pe stoc o gama extinsa de echipamente pentru masurare,
                control si automatizare:
              </p>
              <ul className="mt-3 grid max-h-64 list-disc gap-x-6 gap-y-1 overflow-y-auto pl-4 text-xs text-slate-700 md:grid-cols-2">
                <li>regulatoare, programatoare, indicatoare de temperatura</li>
                <li>inregistratoare cu hartie sau LCD</li>
                <li>traductoare de temperatura (termocupluri, termorezistente)</li>
                <li>traductoare de umiditate si CO2</li>
                <li>senzori de presiune relativa, absoluta, diferentiala</li>
                <li>relee si contactoare statice mono/trifazate</li>
                <li>adaptoare si repetoare de semnal 4–20 mA</li>
                <li>module analogice, numerice, de control si interfatare</li>
                <li>convertoare RS232C–RS485/RS422, USB–RS485, Modbus TCP/RTU</li>
                <li>surse de tensiune pentru echipamente de automatizare</li>
                <li>manometre, manovacumetre, membrane de separatie</li>
                <li>termometre, pirometre, calibratoare, pompe de presiune</li>
                <li>software SCADA WinlogPro pentru aplicatii SCADA</li>
                <li>motoare electrice si convertizoare de frecventa</li>
                <li>analizoare de retea, traductoare de curent</li>
                <li>bobine si integratoare ROGOWSKI</li>
                <li>data-loggere de temperatura, umiditate, presiune</li>
              </ul>
            </section>
          </aside>
        </div>

        {/* Contact / Location */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)] md:items-center">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                Locatie si contact
              </h2>
              <p className="text-sm text-slate-700">
                Pentru informatii suplimentare, oferte personalizate sau suport
                tehnic dedicat, ne puteti contacta folosind datele de mai jos
                sau formularul din pagina de contact.
              </p>

              <div className="mt-4 grid gap-4 text-sm text-slate-800 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Sediu &amp; punct de lucru
                  </h3>
                  <p className="mt-1">
                    Digital Company S.R.L
                    <br />
                    Str. Abator, nr. 2
                    <br />
                    Pascani, jud. Iasi, Romania
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Relatii comerciale
                  </h3>
                  <p className="mt-1">
                    Tel: <span className="font-medium">+40 (0)xxx xxx xxx</span>
                    <br />
                    Email:{" "}
                    <span className="font-medium">
                      office@digital-company.ro
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-700">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Colaborare
              </h3>
              <p>
                Pentru fiecare dintre produsele si serviciile noastre ne puteti
                solicita informatii detaliate, iar echipa noastra va va raspunde
                prompt cu solutii adaptate cerintelor aplicatiei dumneavoastra.
              </p>
              <p className="text-xs text-slate-500">
                Va multumim pentru interes si pentru colaborare!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

