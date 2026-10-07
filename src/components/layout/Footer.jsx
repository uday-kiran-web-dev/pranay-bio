import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#101010] text-white pt-20 pb-12 overflow-hidden relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8">

        {/* Top handwritten tagline matching mockup bottom-left: Let's Create Something Amazing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-white/10">

          {/* Left: Handwritten Quote */}
          <div className="lg:col-span-4">
            <div className="font-handwriting text-3xl sm:text-4xl text-white/90 -rotate-6 select-none">
              Let's Create<br />
              Something<br />
              <span className="text-[#D90B15]">Amazing.</span>
            </div>
          </div>

          {/* Center: Main Headline: LET'S WORK TOGETHER. */}
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#D90B15] uppercase font-bold mb-2">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-none tracking-tight mb-4">
              LET'S WORK
              <br />
              TOGETHER<span className="text-[#D90B15]">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed">
              Have a project in mind? I'm always open to collaborating on exciting ideas, brand films, or creative content.
            </p>
          </div>

          {/* Right: Action Buttons */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-md bg-[#D90B15] hover:bg-[#B80811] text-white font-semibold text-xs tracking-wider transition-colors shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-md bg-transparent hover:bg-white/5 text-white border border-white/20 font-semibold text-xs tracking-wider transition-colors"
            >
              <Mail size={13} />
              <span>Email Me</span>
            </a>
          </div>

        </div>

        {/* Bottom Strip: Brand Name, Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60 font-mono">
          <div className="flex items-center space-x-3">
            <span className="text-base font-display text-white">PRANAY.</span>
            <span>•</span>
            <span className="hidden sm:inline">EDIT • MOTION • CREATE • REPEAT</span>
          </div>

          <div className="flex items-center space-x-6">
            <span>{profile.location.toUpperCase()}</span>
            <span>•</span>
            <span>© 2026  PRANAY KUMAR</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
