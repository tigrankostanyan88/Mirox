"use client";

import { ABOUT_DATA } from "@/lib/data";
import { Sparkles, Zap, GraduationCap, LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  CleanCode: Sparkles,
  Efficiency: Zap,
  Learning: GraduationCap,
};

const COLOR_MAP: Record<string, string> = {
  CleanCode: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Efficiency: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Learning: "text-green-400 bg-green-500/10 border-green-500/20",
};

export const Philosophy = () => {
  const { philosophy } = ABOUT_DATA;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {philosophy.title.split(" ").slice(0, 1)} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">{philosophy.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            {philosophy.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophy.cards.map((card, index) => {
            const Icon = ICON_MAP[card.icon];
            const colors = COLOR_MAP[card.icon];

            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colors} border`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
