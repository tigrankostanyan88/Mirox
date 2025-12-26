import React from "react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  tags: string[];
  title: string;
  description: string;
  color: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  tags,
  title,
  description,
  color,
}) => {
  const isBlue = color === "blue";
  
  return (
    <div className={cn(
      "group relative p-8 rounded-3xl border transition-all duration-300 overflow-hidden py-20",
      isBlue 
        ? "bg-[#0F1623] border-blue-500/10 hover:border-blue-500/30" 
        : "bg-[#0F1623] border-green-500/10 hover:border-green-500/30"
    )}>
      {/* Background Gradient Effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
        isBlue 
          ? "bg-gradient-to-br from-blue-500 to-cyan-500" 
          : "bg-gradient-to-br from-green-500 to-emerald-500"
      )} />

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-6 relative z-10">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium border",
              isBlue 
                ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                : "bg-green-500/10 text-green-400 border-green-500/20"
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Decorative Icon/Shape (Optional subtle background element) */}
      <div className={cn(
        "absolute bottom-0 right-0 w-32 h-32 blur-3xl opacity-10 rounded-full pointer-events-none",
        isBlue ? "bg-blue-500" : "bg-green-500"
      )} />
    </div>
  );
};
