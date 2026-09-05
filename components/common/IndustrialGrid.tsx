// components/common/IndustrialGrid.tsx
import React from 'react';

export const IndustrialGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-industrial-base" />

      {/* Tăng opacity tổng thể lên 50% và dot tâm lưới lên 60% */}
      <svg className="absolute inset-0 h-full w-full opacity-50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="industrial-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" className="stroke-slate-700/60" strokeWidth="1" />
            <circle cx="24" cy="24" r="1" className="fill-industrial-emerald/60" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#industrial-grid-pattern)" />
      </svg>

      {/* Tăng cường độ Gradient Spotlight để tạo chiều sâu cho vòm Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-b from-industrial-emerald/15 via-industrial-cyan/10 to-transparent blur-[140px]" />
    </div>
  );
};