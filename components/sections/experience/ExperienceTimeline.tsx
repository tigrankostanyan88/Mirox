"use client";

import React from "react";
import { EXPERIENCE_PAGE_DATA } from "@/lib/data";
import { TimelineCard } from "./TimelineCard";
import { GraduationCap, FileText } from "lucide-react";

export const ExperienceTimeline = () => {
  const { timeline, education } = EXPERIENCE_PAGE_DATA;

  return (
    <section className="container mx-auto px-4 pb-20 max-w-4xl">
      <div className="relative">
        <div className="space-y-0">
          {timeline.map((item, index) => (
            <TimelineCard 
              key={item.id} 
              item={item} 
              isLast={false} // Connect all experience items
            />
          ))}
        </div>

        {/* Education Section - Connected to the timeline */}
        <div className="relative">
           {/* Timeline Line Connection to Education */}
           <div className="absolute left-4 md:left-8 top-0 h-16 w-px -ml-px bg-white/10" />
           
           {/* Education Icon */}
           <div className="absolute top-0 left-4 md:left-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-[#0B0F19] flex items-center justify-center z-10 -translate-x-1/2 mt-0">
              <FileText className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
           </div>

           {/* Education Content */}
           <div className="pl-16 md:pl-32 pt-2">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                   {education.title}
                </h3>
                
                {education.items.map((edu, idx) => (
                  <div key={idx} className="bg-[#111827]/30 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
                     <h4 className="text-lg font-bold text-white mb-1">{edu.institution}</h4>
                     <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>{edu.degree}</span>
                        <span>•</span>
                        <span>({edu.year})</span>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
