"use client";

import React, { useState } from "react";
import { COURSE_DETAILS_DATA } from "@/lib/data";
import { ChevronDown, PlayCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export const Curriculum = () => {
  const { curriculum } = COURSE_DETAILS_DATA;
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-8">Ուսումնական Ծրագիր</h2>
      
      <div className="space-y-4">
        {curriculum.map((module, index) => (
          <div 
            key={index} 
            className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden"
          >
            {/* Module Header */}
            <button 
              onClick={() => toggleModule(index)}
              className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "mt-1 transition-transform duration-300",
                  openModule === index ? "rotate-180" : ""
                )}>
                  <ChevronDown className="text-gray-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{module.title}</h3>
                  <p className="text-gray-500 text-xs font-medium">{module.duration}</p>
                </div>
              </div>
            </button>

            {/* Module Content (Lessons) */}
            <div className={cn(
              "grid transition-all duration-300 ease-in-out",
              openModule === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}>
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0 space-y-3 border-t border-white/5 mt-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex items-center justify-between group py-2 pl-10 pr-2 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <PlayCircle size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{lesson.title}</span>
                      </div>
                      
                      {lesson.preview ? (
                        <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20">Preview</span>
                      ) : (
                        <Lock size={14} className="text-gray-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
