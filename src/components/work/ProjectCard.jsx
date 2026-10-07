import React, { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block relative rounded-lg overflow-hidden bg-[#101010] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E5E5]/60"
    >
      {/* Thumbnail Aspect Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
        {/* Background Image / Placeholder with error fallback */}
        {!imgError ? (
          <img
            src={project.thumbnail}
            alt={`${project.client} Preview`}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.brandBg} flex items-center justify-center p-6 text-center`}>
            <div>
              <span className="text-2xl font-display text-white tracking-wider block mb-1">
                {project.client}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                [ PRODUCTION FOOTAGE ARCHIVE ]
              </span>
            </div>
          </div>
        )}

        {/* Ambient Dark Gradient for strong text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 group-hover:via-black/20 transition-all duration-300" />

        {/* Top-left Badge Number */}
        <div className="absolute top-3.5 left-3.5 text-[11px] font-mono font-bold text-white/95 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded border border-white/10">
          {project.badge}
        </div>

        {/* Hover subtle Play indicator badge */}
        <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-mono text-white/90 bg-[#D90B15] px-2 py-0.5 rounded flex items-center space-x-1">
          <Play size={8} fill="currentColor" />
          <span>CUT</span>
        </div>

        {/* Bottom Details Content */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div className="pr-2">
            <h3 className="text-lg sm:text-xl font-display uppercase tracking-tight text-white group-hover:text-white transition-colors">
              {project.client}
            </h3>
            <p className="text-xs text-white/80 font-medium mt-0.5 leading-snug">
              {project.category}
            </p>
          </div>

          {/* Small circular arrow button matching mockup */}
          <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D90B15] group-hover:border-[#D90B15] transition-colors shrink-0 shadow-sm">
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
