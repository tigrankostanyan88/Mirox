"use client";

import React from "react";
import { PORTFOLIO_PAGE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const PortfolioCTA = () => {
  const { title, description, buttons } = PORTFOLIO_PAGE_DATA.cta;

  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        <span className="text-white">{title.text} </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          {title.highlight}
        </span>
      </h2>
      
      <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button 
          variant="primary" 
          className="shadow-cyan-500/20 shadow-xl hover:shadow-cyan-500/30 w-full sm:w-auto"
        >
          {buttons.primary}
        </Button>
        
        <Button 
          variant="secondary" 
          className="w-full sm:w-auto"
        >
          {buttons.secondary}
        </Button>
      </div>
    </section>
  );
};
