"use client";

import React from "react";
import { CONTACT_PAGE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Send, ChevronDown } from "lucide-react";

export const ContactForm = () => {
  const { labels, placeholders, subjects, button } = CONTACT_PAGE_DATA.form;

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-200 block pl-1">
            {labels.name}
          </label>
          <input
            type="text"
            placeholder={placeholders.name}
            className="w-full bg-[#131720] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-200 block pl-1">
            {labels.email}
          </label>
          <input
            type="email"
            placeholder={placeholders.email}
            className="w-full bg-[#131720] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-200 block pl-1">
          {labels.subject}
        </label>
        <div className="relative">
          <select 
            className="w-full bg-[#131720] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none appearance-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>{placeholders.subject}</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject} className="bg-[#131720]">
                {subject}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-200 block pl-1">
          {labels.message}
        </label>
        <textarea
          rows={6}
          placeholder={placeholders.message}
          className="w-full bg-[#131720] border border-white/5 rounded-3xl px-6 py-4 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
        />
      </div>

      <Button 
        variant="primary" 
        className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 border-none text-white shadow-lg shadow-blue-500/20 w-auto px-8 py-4 rounded-full flex items-center gap-2 text-base font-semibold"
      >
        {button}
        <Send size={20} />
      </Button>
    </form>
  );
};
