import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ExperienceHero } from "@/components/sections/experience/ExperienceHero";
import { ExperienceTimeline } from "@/components/sections/experience/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] relative overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        <Navbar />
        <ExperienceHero />
        <ExperienceTimeline />
        <Footer />
        <MobileNav />
      </div>
    </main>
  );
}
