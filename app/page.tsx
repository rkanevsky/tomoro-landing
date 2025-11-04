import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="bg-black-rich">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
