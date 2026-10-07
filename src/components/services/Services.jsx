import React from 'react';
import { Film, Sparkles, PlaySquare, Palette, Volume2 } from 'lucide-react';
import { services } from '../../data/services';

export default function Services() {
  const getIcon = (id) => {
    switch (id) {
      case '01':
        return <Film size={22} className="text-[#101010] stroke-[1.8]" />;
      case '02':
        return <Sparkles size={22} className="text-[#101010] stroke-[1.8]" />;
      case '03':
        return <PlaySquare size={22} className="text-[#101010] stroke-[1.8]" />;
      case '04':
        return <Palette size={22} className="text-[#101010] stroke-[1.8]" />;
      case '05':
        return <Volume2 size={22} className="text-[#101010] stroke-[1.8]" />;
      default:
        return <Film size={22} className="text-[#101010] stroke-[1.8]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]/60">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8">

        {/* Title Header matching mockup */}
        <div className="mb-12 sm:mb-14">
          <div className="text-[11px] font-mono tracking-[0.2em] text-[#666666] uppercase mb-1 font-bold">
            WHAT I DO
          </div>
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl font-display text-[#101010] leading-none tracking-tight">
              SERVICES
            </h2>
            <div className="mt-2 w-14 h-1 bg-[#D90B15] rounded-full" />
          </div>
        </div>

        {/* 5 Horizontally Aligned Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-lg bg-[#FAF9F6] border border-[#E5E5E5] hover:border-[#D90B15]/40 hover:bg-white transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Clean icon container */}
                <div className="mb-6 p-2.5 w-11 h-11 rounded bg-white border border-[#E5E5E5] flex items-center justify-center group-hover:border-[#D90B15]/30 group-hover:scale-105 transition-all">
                  {getIcon(item.id)}
                </div>

                <h3 className="text-[13px] sm:text-sm font-display tracking-tight text-[#101010] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E5E5]/60 text-[10px] font-mono text-[#888888] tracking-wider">
                0{item.id} // EXPERTISE
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
