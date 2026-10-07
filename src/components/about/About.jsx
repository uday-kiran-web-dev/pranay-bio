import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { experiences } from '../../data/experience';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#E5E5E5]/60">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

          {/* ================= LEFT: Authentic Close-Up Crop Portrait ================= */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-[340px] rounded-lg overflow-hidden border border-[#E5E5E5] bg-white p-2.5 shadow-sm">
              <div className="relative aspect-[4/5] rounded overflow-hidden bg-[#F2F0EB]">
                {/* Specific head and shoulders crop: scaled 190% and focused on upper portion */}
                <img
                  src="/images/pranay-artwork.png"
                  alt=" Pranay Kumar — Portrait Crop"
                  className="w-full h-full object-cover object-[center_12%] scale-[1.7] translate-y-3 mix-blend-multiply"
                />
              </div>

              {/* Graphic Stamp tags matching mockup */}
              <div className="pt-3.5 pb-2 text-center border-t border-[#E5E5E5]/60 mt-2">
                <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#555555] font-semibold">
                  FILMS • BRANDS • PEOPLE • IDEAS • CULTURE
                </div>
              </div>
            </div>
          </div>

          {/* ================= CENTER: About Biography ================= */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#666666] uppercase mb-1 font-bold">
                ABOUT ME
              </div>
              <h2 className="text-3xl sm:text-4xl font-display text-[#101010] leading-tight tracking-tight">
                A VISUAL
                <br />
                STORYTELLER
                <br />
                AT HEART.
              </h2>
              {/* Red underline */}
              <div className="mt-2 w-16 h-1 bg-[#D90B15] rounded-full" />
            </div>

            <p className="text-sm sm:text-[15px] text-[#555555] leading-relaxed">
              {profile.aboutBio}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-md border border-[#101010] text-[#101010] hover:bg-[#101010] hover:text-white font-semibold text-xs transition-colors"
              >
                <span>More About Me</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-md bg-white border border-[#E5E5E5] text-[#101010] hover:border-[#101010] font-semibold text-xs transition-colors"
              >
                <span>Download Résumé</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT: Verified Experience Timeline ================= */}
          <div id="experience" className="lg:col-span-4 space-y-6 pt-4 lg:pt-0 lg:border-l lg:border-[#E5E5E5] lg:pl-8">
            <div>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#666666] uppercase mb-1 font-bold">
                EXPERIENCE
              </div>
              <div className="text-xs text-[#888888] font-mono">
                VERIFIED POST-PRODUCTION ROLES
              </div>
            </div>

            <div className="space-y-7 relative border-l-2 border-[#E5E5E5] pl-5 ml-1.5 pt-1">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline red bullet */}
                  <span className="absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full bg-[#D90B15]" />

                  <div className="inline-block bg-[#D90B15]/10 text-[#D90B15] text-[10px] font-mono font-bold px-2 py-0.5 rounded tracking-wider mb-1">
                    {exp.duration.toUpperCase()}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#101010] leading-snug">
                    {exp.role}
                  </h3>

                  <div className="text-xs text-[#555555] font-semibold mt-0.5">
                    {exp.company}
                  </div>

                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
