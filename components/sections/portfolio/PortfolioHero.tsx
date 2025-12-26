"use client";

import React from "react";
import { PORTFOLIO_PAGE_DATA } from "@/lib/data";

export const PortfolioHero = () => {
  const { badge, title, description } = PORTFOLIO_PAGE_DATA.hero;

  return (
    <section className="pt-32 pb-12 flex flex-col items-center justify-center text-center px-4">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-8">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        {badge}
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            {title.text}
        </span>
        {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          {title.highlight}
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
        {description}
      </p>
    </section>
  );
};
