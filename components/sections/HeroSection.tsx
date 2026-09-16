'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SiteContentData } from '../../lib/data/fallbackData';
import { ExternalLink, Code2, Terminal, ArrowRight, ShieldCheck, Layout, Database, Sparkles } from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Profile Avatar Card (Matching Reference Style) */}
        <div className="hero-animate relative group mb-2">
          {/* Glowing Ring Accent */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-60 blur-lg group-hover:opacity-90 transition duration-500" />
          
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-[1.8rem] bg-slate-900 border-2 border-slate-700/80 overflow-hidden shadow-2xl flex items-center justify-center">
            <Image
              src="/avatar.jpg"
              alt="Abhishek Jha - Full Stack Developer"
              width={176}
              height={176}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              priority
            />
            {/* Corner Status Badge */}
            <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-slate-950/80 border border-slate-700 flex items-center justify-center shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Name with Sparkle */}
        <h1 className="hero-animate text-3xl sm:text-5xl font-extrabold font-sans text-slate-100 tracking-tight mt-5 flex items-center justify-center gap-2">
          Abhishek Jha
          <span className="text-amber-400 text-2xl sm:text-3xl animate-bounce">✨</span>
        </h1>

        {/* Username / Handle */}
        <div className="hero-animate font-mono text-sm sm:text-base text-slate-400 mt-1">
          @Abhishekjha0009
        </div>

        {/* Role & Tagline */}
        <div className="hero-animate text-lg sm:text-xl font-mono font-semibold text-cyan-400 mt-3 tracking-wide">
          Full Stack Developer
        </div>
        <p className="hero-animate text-xs sm:text-sm font-mono text-slate-400 mt-1 border-b border-slate-800 pb-2 max-w-lg">
          Currently Building Production-Style Full-Stack & MERN Applications
        </p>

        {/* Supporting Bio Text */}
        <p className="hero-animate text-sm sm:text-base font-sans text-slate-300 mt-5 max-w-2xl leading-relaxed">
          {content.subheadline}
        </p>

        {/* Call to Action Buttons */}
        <div className="hero-animate flex flex-wrap items-center justify-center gap-4 mt-7">
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
        <div className="hero-animate flex items-center justify-center gap-4 mt-7">
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
        <div className="hero-animate grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 w-full max-w-3xl">
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
