"use client";

import React from "react";
import { COURSE_DETAILS_DATA } from "@/lib/data";
import { ChevronRight, Clock, BarChart, Star, Globe } from "lucide-react";
import Link from "next/link";

export const CourseHeader = () => {
  const { breadcrumb, title, description, stats } = COURSE_DETAILS_DATA;

  const getIcon = (name: string) => {
    switch (name) {
      case "Clock": return <Clock size={18} className="text-gray-400" />;
      case "BarChart": return <BarChart size={18} className="text-gray-400" />;
      case "Star": return <Star size={18} className="text-yellow-500 fill-yellow-500" />;
      case "Globe": return <Globe size={18} className="text-gray-400" />;
      default: return null;
    }
  };

  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Link href={breadcrumb[0].href} className="text-gray-500 hover:text-white transition-colors">
          {breadcrumb[0].label}
        </Link>
        <ChevronRight size={14} className="text-gray-600" />
        <Link href={breadcrumb[1].href} className="text-blue-500 font-medium hover:text-blue-400 transition-colors">
          {breadcrumb[1].label}
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          {title.highlight}
        </span>{" "}
        <span className="text-white">
          {title.text}
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-lg mb-8 max-w-3xl leading-relaxed">
        {description}
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3 bg-[#111827] border border-white/5 rounded-xl px-4 py-3">
            {getIcon(stat.icon)}
            <div>
              <p className="text-[10px] uppercase text-gray-500 font-bold mb-0.5">{stat.label}</p>
              <p className="text-white font-medium text-sm">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
