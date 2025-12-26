"use client";

import React, { useState } from "react";
import { COURSE_DETAILS_DATA } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  const { faq } = COURSE_DETAILS_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-8">Հաճախ Տրվող Հարցեր</h2>
      
      <div className="space-y-4">
        {faq.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden"
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
            >
              <span className="text-white font-bold text-sm md:text-base pr-4">{item.question}</span>
              <div className={cn(
                "transition-transform duration-300 shrink-0",
                openIndex === index ? "rotate-180" : ""
              )}>
                <ChevronDown className="text-gray-400" size={20} />
              </div>
            </button>

            <div className={cn(
              "grid transition-all duration-300 ease-in-out",
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}>
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
