import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E5E5E5]/60 transition-all">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        {/* Left: PRANAY. logo with red dot */}
        <a href="#" className="flex items-center text-xl sm:text-2xl font-display text-[#101010] tracking-tight">
          <span>PRANAY</span>
          <span className="text-[#D90B15]">.</span>
        </a>

        {/* Center: Clean nav links */}
        <nav className="hidden md:flex items-center space-x-10 text-[13px] font-medium text-[#101010]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#D90B15] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Red pill button LET'S WORK ↗ */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-1 px-5 py-2.5 rounded-full bg-[#D90B15] hover:bg-[#B80811] text-white font-semibold text-xs transition-colors shadow-sm"
          >
            <span>Let's Work</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[#101010] hover:text-[#D90B15]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E5E5E5] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-[#101010] hover:text-[#D90B15]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center space-x-1 w-full py-3 rounded-full bg-[#D90B15] text-white font-semibold text-xs"
            >
              <span>Let's Work</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
