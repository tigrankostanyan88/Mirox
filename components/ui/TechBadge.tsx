import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  icon: LucideIcon;
  iconColor: string;
  borderColor: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, icon: Icon, iconColor, borderColor }) => {
  const activeBorderColor = borderColor.replace("hover:", "active:");
  
  return (
    <div className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A1F2E] border border-white/5 text-gray-300 text-sm transition-colors",
      borderColor,
      activeBorderColor
    )}>
      <Icon className={cn("w-4 h-4", iconColor)} />
      {label}
    </div>
  );
};
