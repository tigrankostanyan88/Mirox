"use client";

import React from "react";
import { Play } from "lucide-react";

export const VideoPlayer = () => {
  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-white/5">
      {/* Background Image Placeholder - using a generic tech/code background */}
      <div className="absolute inset-0 bg-[#0B0F19]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Pulse Effect */}
        <div className="absolute w-20 h-20 bg-blue-500/30 rounded-full animate-ping" />
        <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full animate-pulse" />
        
        {/* Play Button */}
        <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
          <Play className="text-white fill-white ml-1" size={32} />
        </div>
      </div>
    </div>
  );
};
