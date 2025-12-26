"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, HERO_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
            <span className="font-bold text-white">P</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Portfolio</span>
        </div>

        <div className="hidden min-[992px]:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.label} 
                href={link.href} 
                className={cn(
                  "transition-colors relative",
                  isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden min-[992px]:block btn-primary">
          <Button variant="primary" size="sm">
            {HERO_DATA.buttons.secondary}
          </Button>
        </div>
      </div>
    </nav>
  );
};
