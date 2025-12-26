"use client";

import React from "react";
import { COURSES_PAGE_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Code, Bot } from "lucide-react";

interface CoursesFilterProps {
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export const CoursesFilter = ({ activeFilter, onFilterChange }: CoursesFilterProps) => {
  const { filters } = COURSES_PAGE_DATA;

  // Helper to get icon for specific filters
  const getIcon = (id: string) => {
    switch(id) {
      case "web": return <Code size={16} />;
      case "ai": return <Bot size={16} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 mb-12">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        const Icon = getIcon(filter.id);

        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
              isActive 
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105" 
                : "bg-[#111827] border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-[#1f2937]"
            )}
          >
            {Icon && <span>{Icon}</span>}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};
