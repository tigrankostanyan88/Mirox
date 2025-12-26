import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Specialization } from "@/components/sections/Specialization";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500/30 pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <Specialization />
      <CaseStudies />
      <Footer />
      <MobileNav />
    </main>
  );
}
