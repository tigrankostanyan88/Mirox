"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 min-[992px]:hidden flex justify-center pointer-events-none">
      {/* Floating Dock Container */}
      <div className="bg-[#0B0F19]/90 backdrop-blur-xl border-t border-white/10 shadow-2xl pb-6 pt-3 px-2 w-full pointer-events-auto">
        <nav className="flex items-end justify-around">
          {NAV_LINKS.map((link, index) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="relative flex flex-col items-center gap-1 group flex-1"
              >
                {/* Active Indicator (Glow/Background) */}
                <div 
                  className={cn(
                    "absolute -top-10 transition-all duration-300 rounded-full blur-xl",
                    isActive ? "w-12 h-12 bg-cyan-500/40 opacity-100" : "w-0 h-0 opacity-0"
                  )} 
                />

                {/* Icon Container */}
                <div 
                  className={cn(
                    "relative z-10 p-3 rounded-full transition-all duration-300 flex items-center justify-center",
                    isActive 
                      ? "bg-gradient-to-br from-cyan-400 to-teal-500 -translate-y-4 shadow-lg shadow-cyan-500/25" 
                      : "bg-transparent text-gray-400 hover:text-gray-200"
                  )}
                >
                  <Icon 
                    size={20} 
                    className={cn(
                      "transition-all duration-300",
                      isActive ? "text-white" : "text-currentColor"
                    )} 
                  />
                </div>

                {/* Label */}
                <span 
                  className={cn(
                    "text-[10px] font-medium transition-all duration-300",
                    isActive 
                      ? "text-cyan-400 translate-y-0 opacity-100" 
                      : "text-gray-500 translate-y-1 opacity-80 group-hover:text-gray-300"
                  )}
                >
                  {link.label}
                </span>

                {/* Bottom Active Dot (optional, from image reference) */}
                {isActive && (
                  <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
