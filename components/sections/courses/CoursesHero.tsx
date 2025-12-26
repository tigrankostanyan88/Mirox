"use client";

import React from "react";
import { COURSES_PAGE_DATA } from "@/lib/data";

export const CoursesHero = () => {
  const { title, description } = COURSES_PAGE_DATA.hero;

  return (
    <section className="pt-32 pb-12 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-white">{title.text} </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative">
          {title.highlight}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50 blur-sm"></span>
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
        {description}
      </p>
    </section>
  );
};
