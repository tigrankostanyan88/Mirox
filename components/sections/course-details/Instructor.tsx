"use client";

import React from "react";
import { COURSE_DETAILS_DATA } from "@/lib/data";
import Image from "next/image";

export const Instructor = () => {
  const { instructor } = COURSE_DETAILS_DATA;

  return (
    <div className="bg-[#111827] border border-white/5 rounded-3xl p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <div className="shrink-0 relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/20 shadow-lg shadow-blue-500/10">
            {/* Using a placeholder since we don't have the real image file */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-1">{instructor.name}</h3>
          <p className="text-blue-400 text-sm font-medium mb-4">{instructor.title}</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            {instructor.bio}
          </p>
        </div>
      </div>
    </div>
  );
};
