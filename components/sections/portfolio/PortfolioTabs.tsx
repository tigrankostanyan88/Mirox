"use client";

import React from "react";
import { PORTFOLIO_PAGE_DATA } from "@/lib/data";
import { Layout, Server, Bot, Wrench } from "lucide-react";

export const PortfolioTabs = () => {
  const { tabs } = PORTFOLIO_PAGE_DATA;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout": return <Layout size={16} />;
      case "Server": return <Server size={16} />;
      case "Bot": return <Bot size={16} />;
      case "Wrench": return <Wrench size={16} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 border-b border-white/5 mb-20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => scrollToSection(tab.id)}
          className="group flex items-center gap-2 pb-4 text-sm font-medium text-gray-400 hover:text-white transition-colors relative"
        >
          {getIcon(tab.icon)}
          {tab.label}
          
          {/* Active/Hover Indicator */}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-cyan-500 transition-colors" />
        </button>
      ))}
    </div>
  );
};
