"use client";

import { ABOUT_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const AboutCTA = () => {
  const { cta } = ABOUT_DATA;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {cta.title}
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          {cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="md">
            {cta.buttons.primary}
          </Button>
          <Button variant="secondary" size="md">
            {cta.buttons.secondary}
          </Button>
        </div>
      </div>
      
      {/* Bottom Border Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
};
