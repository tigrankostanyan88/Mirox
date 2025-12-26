"use client";

import React from "react";
import { CONTACT_PAGE_DATA } from "@/lib/data";
import { Mail, Phone, MapPin, Linkedin, Github, Youtube } from "lucide-react";

export const ContactInfo = () => {
  const { title, subtitle, details, social, map } = CONTACT_PAGE_DATA.info;

  const getIcon = (name: string) => {
    switch (name) {
      case "Mail": return <Mail className="text-white" strokeWidth={1.5} size={22} />;
      case "Phone": return <Phone className="text-white" strokeWidth={1.5} size={22} />;
      case "MapPin": return <MapPin className="text-white" strokeWidth={1.5} size={22} />;
      case "Linkedin": return <Linkedin className="text-gray-400 group-hover:text-white" strokeWidth={1.5} size={22} />;
      case "Github": return <Github className="text-gray-400 group-hover:text-white" strokeWidth={1.5} size={22} />;
      case "Youtube": return <Youtube className="text-gray-400 group-hover:text-white" strokeWidth={1.5} size={22} />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <div className="bg-[#0B0F16] border border-[#1E2330] rounded-3xl p-8 shadow-2xl">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>

        <div className="space-y-8 mb-10">
          {details.map((item) => (
            <div key={item.id} className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-full bg-[#161B26] border border-[#1E2330] flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>
              <div>
                <p className="text-[11px] uppercase font-bold text-gray-500 mb-1 tracking-widest">{item.label}</p>
                <p className="text-white font-medium text-lg tracking-wide">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-0">
          <p className="text-sm text-gray-500 mb-4 font-medium">{social.title}</p>
          <div className="flex gap-4">
            {social.links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="w-14 h-14 rounded-2xl bg-[#161B26] border border-[#1E2330] flex items-center justify-center group hover:bg-[#1E2330] transition-all"
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="relative h-64 rounded-3xl overflow-hidden group border border-white/5">
        <div className="absolute inset-0 bg-gray-800">
            {/* Simple Grayscale Map Placeholder */}
            <div className="w-full h-full bg-[#1F2937] relative">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Yerevan,Armenia&zoom=13&size=600x300&style=feature:all|element:all|saturation:-100|lightness:-50&key=YOUR_API_KEY')] bg-cover bg-center opacity-40 grayscale contrast-125 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60"></div>
            </div>
        </div>
        
        <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-[#111827]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
          <MapPin size={18} className="text-cyan-400" />
          <span className="text-white text-sm font-medium">{map.location}</span>
        </div>
      </div>
    </div>
  );
};
