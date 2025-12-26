import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  groupHoverIconBg: string;
  borderColor: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  iconColor, 
  iconBg, 
  groupHoverIconBg, 
  borderColor 
}) => {
  const activeBorderColor = borderColor.replace("hover:", "active:");
  const activeIconBg = groupHoverIconBg.replace("group-hover:", "group-active:");

  return (
    <div className={cn(
      "group p-6 rounded-2xl bg-[#111625] border border-white/5 transition-all hover:-translate-y-1 active:-translate-y-1",
      borderColor,
      activeBorderColor
    )}>
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors",
        iconBg,
        groupHoverIconBg,
        activeIconBg
      )}>
        <Icon className={cn("w-6 h-6", iconColor)} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
