"use client";

import React from "react";
import { COURSE_DETAILS_DATA } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export const WhatYouWillLearn = () => {
  const { learningPoints } = COURSE_DETAILS_DATA;

  return (
    <div className="bg-[#111827] border border-white/5 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-white mb-8">Ինչ կսովորեք այս դասընթացում</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {learningPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
            <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
