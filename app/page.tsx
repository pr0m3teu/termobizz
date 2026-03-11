import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroBanner } from "../components/home/HeroBanner";
import { ProductCategories } from "../components/home/ProductCategories";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { PartnersStrip } from "../components/home/PartnersStrip";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main>
        <HeroBanner />
        <ProductCategories />
        <FeaturedProducts />
        <PartnersStrip />
      </main>

      <Footer />
    </div>
  );
}
