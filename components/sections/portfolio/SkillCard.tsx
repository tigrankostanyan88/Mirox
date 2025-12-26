"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Code, Palette, FileCode, Layout, Server, Database, Bot, Workflow } from "lucide-react";

interface SkillCardProps {
  item: {
    title: string;
    description: string;
    badge: { text: string; color: string };
    icon: string;
  };
}

export const SkillCard = ({ item }: SkillCardProps) => {
  const badgeColors: Record<string, string> = {
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "React": return <Code size={24} className="text-blue-400" />;
      case "Palette": return <Palette size={24} className="text-cyan-400" />;
      case "FileCode": return <FileCode size={24} className="text-yellow-400" />;
      case "Layout": return <Layout size={24} className="text-orange-400" />;
      case "Server": return <Server size={24} className="text-green-400" />;
      case "Code": return <Code size={24} className="text-blue-500" />;
      case "Database": return <Database size={24} className="text-blue-300" />;
      case "Bot": return <Bot size={24} className="text-green-400" />;
      case "Workflow": return <Workflow size={24} className="text-purple-400" />;
      default: return <Code size={24} />;
    }
  };

  return (
    <div className="group bg-[#111827] border border-white/5 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
          {getIcon(item.icon)}
        </div>
        <div className={cn(
          "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border",
          badgeColors[item.badge.color] || badgeColors.green
        )}>
          {item.badge.text}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {item.title}
      </h3>
      
      <p className="text-sm text-gray-400 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};
