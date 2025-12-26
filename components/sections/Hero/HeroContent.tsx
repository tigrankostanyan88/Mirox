import React, { useMemo } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { HERO_DATA, TECH_STACK } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TechBadge } from "@/components/ui/TechBadge";

export const HeroContent = () => {
  // Memoize tech stack to avoid recalculations, limit to 5 items
  const techStack = useMemo(() => TECH_STACK.slice(0, 5), []);

  return (
    <div className="flex-1 space-y-8 text-center lg:text-left">
      <StatusBadge>
        {HERO_DATA.badge}
      </StatusBadge>

      <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
        {HERO_DATA.title.line1} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
          {HERO_DATA.title.highlight1}
        </span>{" "}
        <br />
        {HERO_DATA.title.line2}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
          {HERO_DATA.title.highlight2}
        </span>
      </h1>

      <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        {HERO_DATA.description}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <Button className="w-full sm:w-auto group" aria-label="View Portfolio">
          {HERO_DATA.buttons.primary}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button variant="secondary" className="w-full sm:w-auto" aria-label="Contact Me">
          {HERO_DATA.buttons.secondary}
          <Mail className="w-4 h-4" />
        </Button>
      </div>

      <div className="pt-8 border-t border-white/5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          ՏԵԽՆՈԼՈԳԻԱՆԵՐ, ՈՐՈՆՑ ՏԻՐԱՊԵՏՈՒՄ ԵՄ
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          {techStack.map((tech) => (
            <TechBadge key={tech.label} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
};
