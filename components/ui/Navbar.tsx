'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Cpu, User, Mail, FolderGit2, Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '// System', href: '#hero', icon: Terminal },
    { name: '// Engineering', href: '#engineering', icon: Cpu },
    { name: '// Case Studies', href: '#projects', icon: FolderGit2 },
    { name: '// DSA & Algorithmic', href: '#dsa', icon: Code2 },
    { name: '// About & Bio', href: '#about', icon: User },
    { name: '// Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Terminal Header Logo & Phone Number */}
        <a
          href="#hero"
          className="flex items-center gap-2 group font-mono text-sm tracking-tight text-slate-200"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
              abhishek<span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[11px] text-cyan-400 font-mono font-medium flex items-center gap-1">
              <Phone className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
              +91 7667915325
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs font-mono text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick Contact Action */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+917667915325"
            className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 flex items-center gap-1.5 transition-all"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>+91 7667915325</span>
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-xs font-mono font-medium text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 border-b border-cyan-500/20 px-4 py-5 backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-mono text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="tel:+917667915325"
                className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900 text-xs font-mono text-cyan-400"
              >
                <span>📞 Call: +91 7667915325</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
