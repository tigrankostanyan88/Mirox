"use client";

import React from "react";
import { CONTACT_PAGE_DATA } from "@/lib/data";

export const ContactHero = () => {
  const { title, description, subDescription } = CONTACT_PAGE_DATA.hero;

  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="text-blue-500">{title.text} </span>
        <span className="text-green-500">
          {title.highlight}
        </span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-2">
        {description}
      </p>
      
      <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
        {subDescription}
      </p>
    </div>
  );
};
