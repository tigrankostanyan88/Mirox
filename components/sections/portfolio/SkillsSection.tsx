"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SkillCard } from "./SkillCard";

interface SkillsSectionProps {
  section: {
    id: string;
    title: string;
    color: string;
    items: any[];
  };
}

export const SkillsSection = ({ section }: SkillsSectionProps) => {
  const borderColors: Record<string, string> = {
    cyan: "bg-cyan-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
  };

  return (
    <section id={section.id} className="scroll-mt-32">
      <div className="flex items-center gap-3 mb-8">
        <div className={cn("w-1 h-6 rounded-full", borderColors[section.color])} />
        <h2 className="text-2xl font-bold text-white">
          {section.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {section.items.map((item: any) => (
          <SkillCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
