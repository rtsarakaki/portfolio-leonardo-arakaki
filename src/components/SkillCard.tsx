'use client';

import React from 'react';

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, category, index }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 border-l-2 border-l-[#e67e22]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#0f1419] font-semibold text-xs">{name}</span>
        <span className="text-[#e67e22] text-xs font-bold">{level}%</span>
      </div>
      <div className="w-full bg-[#0f1419] bg-opacity-20 rounded-full h-2 mb-2">
        <div
          className="bg-gradient-to-r from-[#e67e22] to-[#c2410c] h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="text-xs text-[#0f1419] font-medium bg-[#e67e22] bg-opacity-10 px-2 py-1 rounded-full">
        {category}
      </span>
    </div>
  );
};

export default SkillCard;
