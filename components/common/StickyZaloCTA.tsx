// components/common/StickyZaloCTA.tsx
'use client';

import React from 'react';
import { MessageSquareShare } from 'lucide-react';

interface StickyZaloCTAProps {
  contactNumber?: string;
}

export const StickyZaloCTA: React.FC<StickyZaloCTAProps> = ({
  contactNumber = process.env.NEXT_PUBLIC_ZALO_PHONE || ''
}) => {
  if (!contactNumber) return null;

  return (
    <aside aria-label="Kênh kỹ thuật trực tiếp" className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://zalo.me/${contactNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-industrial-surface/90 hover:bg-industrial-elevated border border-industrial-emerald/40 hover:border-industrial-emerald text-industrial-slate-body px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md transition-all duration-200"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-industrial-emerald opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-industrial-emerald"></span>
        </span>
        <div className="flex flex-col text-left">
          <span className="text-[10px] tracking-wider uppercase font-mono text-industrial-emerald font-semibold">
            Kỹ Sư Trực Tuyến
          </span>
          <span className="text-xs font-medium text-industrial-slate-body">
            Hỗ trợ kỹ thuật qua Zalo
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-industrial-emerald/10 flex items-center justify-center text-industrial-emerald group-hover:scale-110 transition-transform">
          <MessageSquareShare className="w-4 h-4" />
        </div>
      </a>
    </aside>
  );
};