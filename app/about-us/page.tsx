import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { Philosophy } from "@/components/sections/about/Philosophy";
import { TechStackList } from "@/components/sections/about/TechStackList";
import { Timeline } from "@/components/sections/about/Timeline";
import { OutsideCode } from "@/components/sections/about/OutsideCode";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500/30 pb-24 md:pb-0">
      <Navbar />
      <AboutHero />
      <Philosophy />
      <TechStackList />
      <Timeline />
      <OutsideCode />
      <AboutCTA />
      <Footer />
      <MobileNav />
    </main>
  );
}
