import React from "react";
import Link from "next/link";
import { FOOTER_DATA } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0B0F19] py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">
          {FOOTER_DATA.copyright}
        </p>
        <div className="flex items-center gap-6">
          {FOOTER_DATA.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link 
                key={index} 
                href={social.href} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
