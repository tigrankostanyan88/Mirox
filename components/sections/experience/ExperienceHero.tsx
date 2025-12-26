"use client";

import React from "react";
import { EXPERIENCE_PAGE_DATA } from "@/lib/data";

export const ExperienceHero = () => {
  const { title, subtitle } = EXPERIENCE_PAGE_DATA.hero;

  return (
    <section className="pt-32 pb-10 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-white">{title.text} </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {title.highlight}
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed">
        {subtitle}
      </p>
    </section>
  );
};
