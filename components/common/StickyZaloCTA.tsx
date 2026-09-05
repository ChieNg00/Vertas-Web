// src/components/common/StickyZaloCTA.tsx
'use client';

import React from 'react';
import { MessageSquareShare } from 'lucide-react';

interface StickyZaloCTAProps {
  zaloId?: string; // Số điện thoại hoặc Zalo OA ID
}

export const StickyZaloCTA: React.FC<StickyZaloCTAProps> = ({ zaloId = '0987654321' }) => {
  return (
    <aside aria-label="Kênh liên hệ nhanh" className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://zalo.me/${zaloId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#0F172A]/90 hover:bg-[#1E293B] border border-emerald-500/40 hover:border-emerald-400 text-slate-200 px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md transition-all duration-200"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] tracking-wider uppercase font-mono text-emerald-400 font-semibold">
            Kỹ sư trực tuyến
          </span>
          <span className="text-xs font-medium text-[#CBD5E1]">
            Hỗ trợ nhanh qua Zalo
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
          <MessageSquareShare className="w-4 h-4" />
        </div>
      </a>
    </aside>
  );
};