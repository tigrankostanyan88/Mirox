import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div className="max-w-3xl mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400 text-lg">
        {description}
      </p>
    </div>
  );
};
