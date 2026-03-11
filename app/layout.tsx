import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TermoBizz | Elemente de incalzire si senzori industriali",
    template: "%s | TermoBizz",
  },
  description:
    "TermoBizz ofera elemente de incalzire electrica, senzori de temperatura si echipamente de masura si control pentru aplicatii industriale.",
  metadataBase: new URL("https://www.termobizz.example"), // actualizati cu domeniul final
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TermoBizz | Elemente de incalzire si senzori industriali",
    description:
      "Portofoliu complet de rezistente electrice, senzori si echipamente de control pentru aplicatii industriale.",
    url: "/",
    siteName: "TermoBizz",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
