"use client";

import React from "react";
import { COURSE_DETAILS_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const CourseSidebar = () => {
  const { price, guarantee, button, includes, contact } = COURSE_DETAILS_DATA.sidebar;

  return (
    <div className="space-y-6">
      {/* Price & Enroll Card */}
      <div className="bg-[#111827] border border-white/5 rounded-3xl p-6 md:p-8">
        <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">ԱՄԲՈՂՋԱԿԱՆ ՓԱԹԵԹ</p>
        <div className="flex items-end gap-2 mb-6">
          <h2 className="text-4xl font-bold text-white">{price}</h2>
        </div>
        
        <div className="inline-block bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5 mb-8">
          <p className="text-green-500 text-xs font-medium">{guarantee}</p>
        </div>

        <Button 
          variant="primary" 
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 border-none text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 mb-8"
        >
          {button}
        </Button>

        <div className="space-y-4">
          <p className="text-white font-bold text-sm">Ինչ է ներառված՝</p>
          <ul className="space-y-3">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-[#111827] border border-white/5 rounded-3xl p-6 md:p-8">
        <h3 className="text-white font-bold mb-2">{contact.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{contact.subtitle}</p>
        <Link href="/contact" className="text-blue-500 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
          {contact.link}
        </Link>
      </div>
    </div>
  );
};
