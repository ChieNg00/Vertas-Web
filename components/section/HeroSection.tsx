// src/components/sections/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Wrench, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { HERO_CONTENT, VERTAS_LEGAL } from '@/content/vertas-data';
import { IndustrialGrid } from '@/components/common/IndustrialGrid';

interface HeroSectionProps {
  onRequestQuote: () => void;
  onTalkToEngineer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestQuote,
  onTalkToEngineer
}) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-slate-800/80 pt-20 pb-16">
      <IndustrialGrid />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Compliance / Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-emerald-500/30 bg-emerald-950/20 mb-8"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-mono tracking-wide text-emerald-400">
            {HERO_CONTENT.badge}
          </span>
        </motion.div>

        {/* Technical Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15]"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        {/* Subline - High Contrast #CBD5E1 (WCAG AA Compliant) */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[#CBD5E1] max-w-2xl leading-relaxed font-normal"
        >
          {HERO_CONTENT.subline}
        </motion.p>

        {/* Dual Conversion Engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
        >
          {/* Primary CTA 1: Request a Quote */}
          <button
            onClick={onRequestQuote}
            className="group inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3.5 rounded transition-all duration-150 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4 text-slate-950" />
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Primary CTA 2: Talk to an Engineer */}
          <button
            onClick={onTalkToEngineer}
            className="group inline-flex items-center gap-2.5 bg-[#0F172A] hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium px-6 py-3.5 rounded transition-all duration-150 cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-cyan-400" />
            <span>Talk to an Engineer</span>
          </button>
        </motion.div>

        {/* Engineering Metrics Ribbon - Factual & Exact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {HERO_CONTENT.metrics.map((item, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                {item.label}
              </span>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
                  {item.value}
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  {item.unit}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};