import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Hero({ onOpenShowreel }) {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] pt-6 sm:pt-10 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* ================= LEFT REGION: 42% ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10 lg:pr-2">
            {/* Top tiny label: CUTS × MOTION × STORIES */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#666666] uppercase mb-3 sm:mb-4"
            >
              {profile.tagline}
            </motion.div>

            {/* Main Name:  Pranay Kumar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] font-display text-[#101010] leading-[1.03] tracking-tight">

                <br />
                Pranay Kumar
              </h1>

              {/* Red brush-stroke underline accent */}
              <div className="mt-2.5 w-28 h-1.5 bg-[#D90B15] rounded-full" />
            </motion.div>

            {/* Sub-label: VIDEO EDITOR & MOTION DESIGNER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-5 sm:mt-6 text-xs sm:text-[13px] font-mono font-bold tracking-[0.16em] text-[#101010] uppercase"
            >
              {profile.title}
            </motion.div>

            {/* Supporting paragraph description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-3.5 sm:mt-4 text-[14px] sm:text-[15px] text-[#555555] leading-relaxed max-w-[460px]"
            >
              {profile.heroDescription}
            </motion.p>

            {/* CTA Buttons: VIEW SHOWREEL & VIEW WORK ↗ */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={onOpenShowreel}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-md bg-[#D90B15] hover:bg-[#B80811] text-white font-semibold text-xs tracking-wider transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <Play size={12} fill="currentColor" />
                <span>View Showreel</span>
              </button>

              <a
                href="#work"
                className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-md bg-white hover:bg-[#F2F0EB] text-[#101010] border border-[#101010]/20 font-semibold text-xs tracking-wider transition-colors"
              >
                <span>View Work</span>
                <ArrowUpRight size={13} />
              </a>
            </motion.div>

            {/* Hand-drawn style quotes / signature box matching mockup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 sm:mt-10 pt-5 border-t border-[#E5E5E5] flex items-center justify-between max-w-[390px]"
            >
              <div className="text-[10px] sm:text-[11px] font-mono text-[#666666] tracking-wider uppercase leading-snug">
                GOOD STORIES<br />
                DESERVE<br />
                GREAT EDITS.
              </div>
              <div className="font-handwriting text-2xl sm:text-3xl text-[#101010] -rotate-6 select-none">
                Pranay.
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT REGION: 58% (High Visual Prominence) ================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full max-w-[620px] xl:max-w-[680px] flex items-center justify-center"
            >
              {/* Artwork prominently sized and cleanly blended into background */}
              <img
                src="/images/pranay-artwork.png"
                alt=" Pranay Kumar — Illustrated Artwork"
                className="w-full h-auto object-contain max-h-[640px] xl:max-h-[720px] mix-blend-multiply drop-shadow-sm select-none"
              />

              {/* Hand-drawn annotation: EDIT • MOTION • CREATE • REPEAT */}
              <div className="absolute right-1 sm:right-3 top-1/2 -translate-y-10 font-handwriting text-xl sm:text-2xl xl:text-3xl text-[#101010] -rotate-12 select-none text-right hidden sm:block pointer-events-none">
                EDIT<br />
                MOTION<br />
                CREATE<br />
                REPEAT.
              </div>

              {/* Micro caption: SAME FOOTAGE DIFFERENT EMOTIONS */}
              <div className="absolute right-1 sm:right-3 bottom-6 sm:bottom-10 text-[9px] sm:text-[10px] font-mono text-[#777777] tracking-widest uppercase text-right hidden md:block">
                SAME FOOTAGE<br />
                DIFFERENT<br />
                EMOTIONS.<br />
                THAT'S THE EDIT.
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
