import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { PortfolioHero } from "@/components/sections/portfolio/PortfolioHero";
import { PortfolioTabs } from "@/components/sections/portfolio/PortfolioTabs";
import { SkillsSection } from "@/components/sections/portfolio/SkillsSection";
import { PortfolioCTA } from "@/components/sections/portfolio/PortfolioCTA";
import { PORTFOLIO_PAGE_DATA } from "@/lib/data";

export default function PortfolioPage() {
  const { sections } = PORTFOLIO_PAGE_DATA;

  return (
    <main className="min-h-screen bg-[#0B0F19] relative overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        <Navbar />
        <PortfolioHero />
        <PortfolioTabs />
        
        <div className="container mx-auto px-4 pb-20 space-y-24">
          {sections.map((section) => (
            <SkillsSection key={section.id} section={section} />
          ))}
        </div>

        <PortfolioCTA />
        <Footer />
        <MobileNav />
      </div>
    </main>
  );
}
