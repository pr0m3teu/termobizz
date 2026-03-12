import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PARTNER_DIR = path.join(process.cwd(), "public", "parteneri");
const VALID_IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"];

type PartnerLogo = {
  fileName: string;
  src: string;
  name: string;
};

async function getPartnerLogos(): Promise<PartnerLogo[]> {
  try {
    const entries = await fs.readdir(PARTNER_DIR, { withFileTypes: true });

    return entries
      .filter((entry) => {
        if (!entry.isFile()) return false;
        const ext = path.extname(entry.name).toLowerCase();
        return VALID_IMAGE_EXTENSIONS.includes(ext);
      })
      .map((entry) => {
        const fileName = entry.name;
        const baseName = fileName.replace(/\.[^.]+$/, "");
        const name = baseName
          .replace(/[-_]+/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        const encoded = encodeURIComponent(fileName);

        return {
          fileName,
          src: `/parteneri/${encoded}`,
          name,
        };
      });
  } catch {
    return [];
  }
}

export default async function PartnersPage() {
  const logos = await getPartnerLogos();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="container mx-auto px-4 py-10 lg:px-8 lg:py-16">
        <section className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
            Parteneri
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
            Parteneri si branduri reprezentate
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Colaboram cu producatori si furnizori internationali de renume
            pentru a oferi echipamente fiabile de masurare, control si
            automatizare industriala.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          {logos.length === 0 ? (
            <p className="text-sm text-slate-600">
              Nu au fost gasite logouri in directorul{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                public/parteneri
              </code>
              . Adaugati fisiere imagine ale partenerilor pentru a le afisa
              aici.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {logos.map((logo) => (
                <div
                  key={logo.fileName}
                  className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-center shadow-sm transition hover:border-sky-500 hover:bg-white"
                >
                  <div className="relative mb-3 flex h-16 w-full items-center justify-center overflow-hidden">
                    <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                      <Image
                        src={logo.src}
                        alt={logo.name || "Logo partener"}
                        fill
                        sizes="128px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="line-clamp-2 text-xs font-medium text-slate-800">
                    {logo.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

