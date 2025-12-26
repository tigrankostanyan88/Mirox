"use client";

import { ABOUT_DATA } from "@/lib/data";

export const TechStackList = () => {
  const { techStack } = ABOUT_DATA;

  const getBadgeStyles = (tech: string) => {
    if (tech === "OpenAI API") {
      return "bg-teal-500/10 border-teal-500/20 text-teal-400 hover:bg-teal-500/20 hover:border-teal-500/40";
    }
    if (tech === "LangChain") {
      return "bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-500/40";
    }
    return "bg-[#1F2937] border-white/5 text-gray-300 hover:bg-[#374151] hover:border-white/10 hover:text-white";
  };

  return (
    <section className="py-10 border-y border-white/5 bg-[#0B0F19]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="md:w-1/4 shrink-0">
            <h3 className="text-xl font-bold text-white border-l-4 border-cyan-500 pl-4">
              {techStack.title}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {techStack.stack.map((tech, index) => (
              <span 
                key={index}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors cursor-default ${getBadgeStyles(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
