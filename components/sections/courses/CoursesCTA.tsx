"use client";

import React from "react";
import { COURSES_PAGE_DATA } from "@/lib/data";
import Link from "next/link";
import { Mail, Eye } from "lucide-react";

export const CoursesCTA = () => {
  const { title, description, buttons } = COURSES_PAGE_DATA.cta;

  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="btn btn-md btn-primary shadow-cyan-500/20 shadow-xl hover:shadow-cyan-500/30 w-full sm:w-auto flex items-center gap-2 justify-center rounded-full"
          >
            <Mail size={20} />
            {buttons.primary}
          </Link>
          
          <Link 
            href="/portfolio"
            className="btn btn-md btn-secondary w-full sm:w-auto flex items-center gap-2 justify-center rounded-full"
          >
            <Eye size={20} />
            {buttons.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
};
