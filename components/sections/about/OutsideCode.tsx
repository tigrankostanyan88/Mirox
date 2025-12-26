"use client";

import { ABOUT_DATA } from "@/lib/data";
import { Coffee, BookOpen, Crown } from "lucide-react";

export const OutsideCode = () => {
  const { outside } = ABOUT_DATA;

  return (
    <section className="py-20 relative bg-white/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-6">
              {outside.title}
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {outside.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {outside.badges.map((badge, index) => {
                const icons = [Crown, BookOpen, Coffee];
                const Icon = icons[index % icons.length];
                
                return (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1629] border border-white/10 text-gray-300">
                    <Icon className="w-4 h-4 text-emerald-400" />
                    <span>{badge}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image (Placeholder/Chess) */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120] via-transparent to-transparent z-10" />
              
              {/* Placeholder for Chess Image */}
              <div className="w-full h-full bg-[#1a2333] flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50" />
                 
                 {/* Chess Pattern/Icon */}
                 <div className="text-center z-20">
                    <Crown className="w-20 h-20 text-white/10 mx-auto mb-4" />
                    <span className="text-white/20 text-sm font-medium uppercase tracking-widest">Chess & Strategy</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
