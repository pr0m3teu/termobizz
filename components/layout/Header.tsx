import Link from "next/link";
import Image from "next/image";

const mainNav = [
  { label: "Produse", href: "/produse" },
  { label: "Promotii", href: "/promotii" },
  { label: "Parteneri", href: "/parteneri" },
  { label: "Despre noi", href: "/despre-noi" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="TermoBizz" width={100} height={100} />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-sky-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-200 text-slate-700 transition hover:border-sky-900 hover:text-sky-900 md:hidden">
            <span className="sr-only">Deschide meniul</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

