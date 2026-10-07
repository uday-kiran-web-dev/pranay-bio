import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/hero/Hero';
import SelectedWork from '../components/work/SelectedWork';
import Statistics from '../components/about/Statistics';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Footer from '../components/layout/Footer';
import VideoModal from '../components/showreel/VideoModal';

export default function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <div className="bg-[#FAF9F6] text-[#101010] min-h-screen">
      {/* 01 Navigation */}
      <Navbar />

      {/* 02 Hero matching the approved mockup */}
      <Hero onOpenShowreel={() => setShowreelOpen(true)} />

      {/* 03 Selected Work matching the 3-column project grid */}
      <SelectedWork />

      {/* 04 Statistics Strip */}
      <Statistics />

      {/* 05 About & Experience 3-column layout */}
      <About />

      {/* 06 Services (5 clean cards) */}
      <Services />

      {/* 07 Dark Creative Contact Footer */}
      <Footer />

      {/* Showreel Lightbox */}
      <VideoModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        title=" PRANAY KUMAR — SHOWREEL 2026"
      />
    </div>
  );
}
