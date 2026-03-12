import fs from "fs/promises";
import path from "path";
import Image from "next/image";

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

export async function PartnersStrip() {
  const logos = await getPartnerLogos();
  const trackItems = [...logos, ...logos];

  if (logos.length === 0) {
    return null;
  }

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
            O selectie de parteneri internationali si furnizori de echipamente
            pentru automatizari industriale.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white/70">
          <div className="marquee-track flex items-center gap-8 py-4">
            {trackItems.map((logo, index) => (
              <div
                key={`${logo.fileName}-${index}`}
                className="flex min-w-[140px] max-w-[180px] items-center justify-center px-4"
              >
                <div className="relative h-10 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.name || "Logo partener"}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

