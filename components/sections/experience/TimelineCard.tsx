"use client";

import React from "react";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineCardProps {
  item: {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    description: string;
    bullets: string[];
    tags: string[];
    icon: string;
  };
  isLast?: boolean;
}

const IconMap: Record<string, React.ElementType> = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Code: Code,
};

export const TimelineCard = ({ item, isLast }: TimelineCardProps) => {
  const Icon = IconMap[item.icon] || Briefcase;

  return (
    <div className="relative">
      {/* Timeline Line & Dot */}
      <div className="absolute left-4 md:left-8 top-0 h-full w-px -ml-px flex flex-col items-center">
        <div className={cn(
          "w-px bg-white/10 h-full",
          isLast ? "h-0" : ""
        )} />
        <div className="absolute top-0 left-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-[#0B0F19] flex items-center justify-center z-10 -translate-x-1/2">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
        </div>
      </div>

      {/* Content Container */}
      <div className="pl-16 md:pl-32 pb-12 md:pb-20 relative">
        <div className="bg-[#111827]/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-cyan-500/20 transition-all duration-300 group">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-cyan-400 font-medium">
                {item.subtitle}
              </p>
            </div>
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 whitespace-nowrap self-start">
              {item.date}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {item.description}
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-6">
            {item.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-400 hover:bg-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
