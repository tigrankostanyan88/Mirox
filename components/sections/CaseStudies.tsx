import React from "react";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES, CASE_STUDIES_DATA } from "@/lib/data";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";

export const CaseStudies = () => {
  return (
    <section className="py-20 bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {CASE_STUDIES_DATA.title}
            </h2>
            <p className="text-gray-400 text-lg">
              {CASE_STUDIES_DATA.description}
            </p>
          </div>
          
          <button className="group flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors shrink-0">
            {CASE_STUDIES_DATA.button}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};
