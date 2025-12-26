"use client";

import { ABOUT_DATA } from "@/lib/data";
import { Briefcase, Users, Bot, Award, LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Client: Briefcase,
  Teaching: Users,
  AI: Bot,
  Expert: Award,
};

const COLOR_MAP: Record<string, string> = {
  Client: "bg-blue-500",
  Teaching: "bg-indigo-500",
  AI: "bg-cyan-500",
  Expert: "bg-emerald-500",
};

export const Timeline = () => {
  const { timeline } = ABOUT_DATA;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Իմ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Ուղին</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.steps.map((step, index) => {
              const Icon = ICON_MAP[step.icon];
              const colorClass = COLOR_MAP[step.icon];
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  {/* Date Badge (Desktop Center) */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full ${colorClass} bg-opacity-20 border border-white/10 flex items-center justify-center backdrop-blur-sm z-10`}>
                      <div className={`w-3 h-3 rounded-full ${colorClass}`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                     <div className="group relative p-6 rounded-2xl bg-[#0F1629] border border-white/5 hover:border-white/10 transition-all">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                        
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${colorClass.replace('bg-', 'text-')} bg-white/5`}>
                          {step.year}
                        </span>
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
