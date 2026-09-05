// src/components/common/IndustrialGrid.tsx
import React from 'react';

export const IndustrialGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-industrial-base" />

      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="industrial-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" className="stroke-industrial-border" strokeWidth="1" />
            <circle cx="24" cy="24" r="0.75" className="fill-industrial-emerald/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#industrial-grid-pattern)" />
      </svg>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-industrial-emerald/10 via-industrial-cyan/5 to-transparent blur-[120px]" />
    </div>
  );
};