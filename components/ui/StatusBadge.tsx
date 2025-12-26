import React from "react";

interface StatusBadgeProps {
  children: React.ReactNode;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ children }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      {children}
    </div>
  );
};
