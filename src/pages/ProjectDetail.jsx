import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Play, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex] || projects[0];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="bg-[#FAF9F6] text-[#101010] min-h-screen">
      <Navbar />

      <main className="max-w-[1320px] mx-auto px-6 sm:px-8 pt-10 sm:pt-14 pb-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#work"
            className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-wider uppercase text-[#666666] hover:text-[#D90B15] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Works</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-10 pb-6 border-b border-[#E5E5E5]">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D90B15] font-bold mb-2">
            PROJECT {project.badge} // {project.category}
          </div>
          <h1 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-[#101010] mb-4">
            {project.client}
          </h1>
          <p className="text-base sm:text-lg text-[#666666] max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Media Hero Frame */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-[#E5E5E5] shadow-lg mb-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#D90B15] text-white flex items-center justify-center shadow-lg">
              <Play size={24} fill="currentColor" className="ml-1" />
            </div>
          </div>

          <div className="absolute top-4 left-4 text-xs font-mono text-white/90 bg-black/60 px-3 py-1 rounded">
            PRORES 422 HQ • 24 FPS
          </div>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-[#E5E5E5] text-sm mb-16">
          <div>
            <div className="text-xs font-mono text-[#888888] uppercase tracking-wider mb-1">
              ROLES DELIVERED
            </div>
            <div className="font-semibold text-[#101010]">
              {project.roles.join(', ')}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#888888] uppercase tracking-wider mb-1">
              TOOLS EMPLOYED
            </div>
            <div className="font-semibold text-[#101010]">
              {project.tools.join(', ')}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#888888] uppercase tracking-wider mb-1">
              ASPECT RATIO
            </div>
            <div className="font-semibold text-[#101010]">
              {project.aspectRatio} Widescreen
            </div>
          </div>
        </div>

        {/* Next Project Footer */}
        <div className="flex items-center justify-between pt-6">
          <span className="text-xs font-mono text-[#888888] uppercase">
            NEXT PROJECT
          </span>
          <Link
            to={`/work/${nextProject.slug}`}
            className="inline-flex items-center space-x-2 text-base sm:text-xl font-display uppercase tracking-tight text-[#101010] hover:text-[#D90B15] transition-colors"
          >
            <span>{nextProject.client}</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
