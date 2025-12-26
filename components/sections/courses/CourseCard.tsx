"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    image: string;
    badge: { text: string; color: string };
    level: { text: string; rating: string };
    description: string;
    duration: string;
    link: string;
  };
}

const badgeColors: Record<string, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
};

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="group bg-[#111827]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* We use a colored div as placeholder if image fails, or just the gradient overlay */}
        <div className="absolute inset-0 bg-[#0B0F19] flex items-center justify-center">
            {/* Fallback pattern or actual image */}
            <div className={`w-full h-full bg-gradient-to-br ${
                course.badge.color === 'cyan' ? 'from-cyan-900/20 to-blue-900/20' : 
                course.badge.color === 'purple' ? 'from-purple-900/20 to-pink-900/20' :
                'from-green-900/20 to-emerald-900/20'
            }`} />
        </div>
        
        {/* Placeholder for actual image - in real app would use next/image with real src */}
        {/* <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" /> */}
        
        {/* Badge */}
        <div className={cn(
          "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider backdrop-blur-md",
          badgeColors[course.badge.color] || badgeColors.cyan
        )}>
          {course.badge.text}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Meta Row */}
        <div className="flex items-center justify-between mb-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
          <span>{course.level.text}</span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={14} fill="currentColor" />
            <span className="text-white">{course.level.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {course.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          
          <Link 
            href={`/courses/${course.id}`}
            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0 h-auto font-medium flex items-center gap-2 group/btn transition-colors duration-300 rounded-full"
          >
            Իմանալ Ավելին
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
