import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function SelectedWork() {
  return (
    <section id="work" className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-[#E5E5E5]/60">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8">

        {/* Section Header matching mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#D90B15] uppercase font-bold mb-1">
              FEATURED PROJECTS
            </div>

            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#101010] leading-none tracking-tight">
                SELECTED
                <br />
                <span className="text-[#D90B15]">WORK</span>
              </h2>
              {/* Red underline brush */}
              <div className="mt-2 w-20 h-1 bg-[#D90B15] rounded-full" />
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col md:items-end">
            <p className="text-xs sm:text-[13px] text-[#666666] max-w-sm md:text-right leading-relaxed mb-3">
              A mix of brand films, digital campaigns, motion graphics and storytelling projects I've had the chance to work on.
            </p>
            <a
              href="#work"
              className="inline-flex items-center space-x-1 text-xs font-mono font-bold uppercase tracking-wider text-[#101010] hover:text-[#D90B15] transition-colors"
            >
              <span>VIEW ALL WORKS</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* 3-Column Responsive Grid matching mockup (6 projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
