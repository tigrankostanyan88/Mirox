import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative" aria-label="Introduction">
      {/* Background Glow - optimized with opacity pulse instead of bounce */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[500px] aspect-square bg-cyan-500/20 rounded-full blur-[100px] -z-10 animate-pulse"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
