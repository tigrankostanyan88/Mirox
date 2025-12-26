import React from "react";
import { SPECIALIZATION_DATA, SERVICES } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const Specialization = () => {
  return (
    <section className="py-20 bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title={SPECIALIZATION_DATA.title} 
          description={SPECIALIZATION_DATA.description} 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
