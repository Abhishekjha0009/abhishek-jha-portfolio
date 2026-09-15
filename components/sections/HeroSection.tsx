'use client';

import React, { useEffect, useRef } from 'react';
import { SiteContentData } from '../../lib/data/fallbackData';
import { ExternalLink, Code2, Terminal, ArrowRight, ShieldCheck, Layout, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { gsap } from '../../lib/gsap/gsapSetup';

interface HeroSectionProps {
  content: SiteContentData;
}

export function HeroSection({ content }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Terminal Status Pill */}
        <div className="hero-animate inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>abhishek_kumar@system:~$</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">MERN Stack & Algorithms</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="hero-animate text-3xl sm:text-5xl md:text-6xl font-extrabold font-mono text-slate-100 tracking-tight leading-[1.15] max-w-4xl">
          Building <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">full-stack systems</span> that solve real problems.
        </h1>

        {/* Subheadline */}
        <p className="hero-animate text-base sm:text-lg md:text-xl font-sans text-slate-400 mt-6 max-w-2xl leading-relaxed">
          {content.subheadline}
        </p>

        {/* Call to Action Buttons */}
        <div className="hero-animate flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-mono text-sm font-semibold text-slate-950 hover:brightness-110 shadow-[0_0_25px_rgba(0,240,255,0.35)] flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Architectural Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={content.socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 font-mono text-sm font-medium text-slate-200 hover:border-amber-400/50 hover:text-amber-400 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 backdrop-blur-md"
          >
            <Code2 className="w-4 h-4 text-amber-400" />
            <span>LeetCode Profile</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="hero-animate flex items-center justify-center gap-4 mt-8">
          <a
            href={content.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={content.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${content.socialLinks.email}`}
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            title="Send Email"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="hero-animate grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 w-full max-w-3xl">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex flex-col items-center text-center hover:border-cyan-500/30 transition-all">
            <Layout className="w-5 h-5 text-cyan-400 mb-2" />
            <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase">Full-Stack Next.js</h4>
            <p className="text-[11px] text-slate-400 mt-1">Modern React App Router & Tailwind CSS UI</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex flex-col items-center text-center hover:border-cyan-500/30 transition-all">
            <Database className="w-5 h-5 text-indigo-400 mb-2" />
            <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase">MERN & REST APIs</h4>
            <p className="text-[11px] text-slate-400 mt-1">Production node servers, MongoDB indexing</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex flex-col items-center text-center hover:border-cyan-500/30 transition-all">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
            <h4 className="text-xs font-mono font-semibold text-slate-200 uppercase">C++ & Algorithms</h4>
            <p className="text-[11px] text-slate-400 mt-1">Data Structures & Problem Solving</p>
          </div>
        </div>
      </div>
    </section>
  );
}
