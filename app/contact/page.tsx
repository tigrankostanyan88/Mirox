import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] relative overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <ContactHero />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-12">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
            </div>
          </div>
        </div>

        <Footer />
        <MobileNav />
      </div>
    </main>
  );
}
