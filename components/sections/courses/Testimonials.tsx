"use client";

import React from "react";
import { COURSES_PAGE_DATA } from "@/lib/data";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Testimonials = () => {
  const { title, subtitle, items } = COURSES_PAGE_DATA.testimonials;
  const testimonial = items[0]; // Currently showing just first one as static

  return (
    <section className="container mx-auto px-4 py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Header & Nav */}
        <div className="lg:w-1/3 space-y-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-400 text-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white transition-all">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side: Card */}
        <div className="lg:w-2/3 w-full">
          <div className="bg-[#111827]/50 border border-white/5 rounded-2xl p-8 md:p-10 relative">
            <Quote className="absolute top-8 right-8 text-white/5 w-16 h-16" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#111827] flex items-center justify-center overflow-hidden">
                   {/* Placeholder avatar */}
                   <span className="text-xl font-bold text-white">
                     {testimonial.name.charAt(0)}
                   </span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {testimonial.name}
                </h4>
                <p className="text-cyan-400 text-sm font-medium">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed italic relative z-10">
              "{testimonial.quote}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
