// src/components/common/IndustrialGrid.tsx
import React from 'react';

export const IndustrialGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background base tone */}
      <div className="absolute inset-0 bg-[#090D16]" />

      {/* Blueprint Coordinate Crosshairs & Dots */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20 stroke-slate-600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="industrial-grid-pattern"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="rgba(148, 163, 184, 0.15)"
              strokeWidth="1"
            />
            <circle cx="24" cy="24" r="0.75" fill="rgba(16, 185, 129, 0.4)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#industrial-grid-pattern)" />
      </svg>

      {/* Radial Depth Lighting (Focus in top-center) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-[120px]" 
      />
    </div>
  );
};