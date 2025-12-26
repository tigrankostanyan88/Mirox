"use client";

import { ABOUT_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const AboutHero = () => {
  const { hero } = ABOUT_DATA;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0B0F19]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-cyan-900/20 via-blue-900/10 to-transparent rounded-[100%] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Profile Image (Avatar Style) */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mb-10 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-spin-slow blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-1 rounded-full bg-[#0B0F19] p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src={hero.image}
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-300 tracking-wide uppercase">{hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8 break-words max-w-full">
            {hero.title.line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x inline-block">{hero.title.line2}</span>
            <span className="block text-2xl sm:text-3xl md:text-5xl text-gray-400 mt-4 font-normal">{hero.title.line3}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed mx-auto">
            {hero.description}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 md:gap-20 border-t border-b border-white/5 py-8 mb-12 w-full max-w-3xl">
            {hero.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-cyan-500 font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

           {/* Buttons */}
           <div className="flex flex-wrap justify-center gap-5">
              <Button variant="primary" size="md">
                {hero.buttons.primary}
              </Button>
              <Button variant="secondary" size="md">
                {hero.buttons.secondary}
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
};
