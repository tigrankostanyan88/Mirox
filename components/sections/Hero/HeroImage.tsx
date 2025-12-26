import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { HERO_DATA } from "@/lib/data";

export const HeroImage = () => {
  return (
    <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
      <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#1A1F2E]">
        <Image 
          src="/images/hero/imageme.png"
          alt="Tigran – Full Stack Developer portrait"
          fill
          className="object-cover"
          priority
        />
        
        {/* Experience Badge - Top Left */}
        <div className="absolute top-6 left-6 bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl animate-pulse">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base leading-none mb-1">{HERO_DATA.experience.years}</h3>
            <p className="text-gray-400 text-xs font-medium">{HERO_DATA.experience.label}</p>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-6 left-6 right-6 bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">{HERO_DATA.stats.count} {HERO_DATA.stats.label}</h3>
            <p className="text-gray-400 text-sm">{HERO_DATA.stats.subLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
