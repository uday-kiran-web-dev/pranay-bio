import React from 'react';
import { profile } from '../../data/profile';

export default function Statistics() {
  const statsList = [
    { value: profile.stats.brands, label: profile.stats.brandsLabel },
    { value: profile.stats.shortFilms, label: profile.stats.shortFilmsLabel },
    { value: profile.stats.experience, label: profile.stats.experienceLabel },
    { value: profile.stats.passion, label: profile.stats.passionLabel, accent: true },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF] border-y border-[#E5E5E5]/70">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Numbers Grid matching verified 40+ brands, 5+ short films, ~2 yrs experience */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-3/4">
            {statsList.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center sm:text-left ${idx !== 0 ? 'sm:border-l sm:border-[#E5E5E5] sm:pl-6' : ''
                  }`}
              >
                <div
                  className={`text-3xl sm:text-4xl lg:text-5xl font-display leading-none mb-2 ${stat.accent ? 'text-[#D90B15]' : 'text-[#101010]'
                    }`}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#666666] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right handwritten caption matching mockup: More Stories to Create... */}
          <div className="font-handwriting text-2xl sm:text-3xl text-[#101010] -rotate-6 select-none shrink-0 lg:text-right">
            More Stories<br />to Create...
          </div>

        </div>
      </div>
    </section>
  );
}
