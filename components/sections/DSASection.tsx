'use client';

import React, { useEffect, useRef } from 'react';
import { SiteContentData } from '../../lib/data/fallbackData';
import { Code2, ExternalLink, Award, CheckCircle, Cpu, ArrowUpRight } from 'lucide-react';
import { useMasterAnimation } from '../gsap/MasterAnimationProvider';

interface DSASectionProps {
  content: SiteContentData;
}

export function DSASection({ content }: DSASectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerRevealSection } = useMasterAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerRevealSection(sectionRef.current);
    }
  }, [registerRevealSection]);

  const { leetCodeStats } = content;

  return (
    <section id="dsa" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 lg:p-12 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* Glow Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Stats & LeetCode Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-400">
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>ALGORITHMIC_MASTERY.cpp</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-100 tracking-tight">
              Data Structures & <span className="text-amber-400">Algorithms</span>
            </h2>

            <p className="text-sm font-sans text-slate-300 leading-relaxed">
              Problem solving in <span className="font-mono text-amber-400 font-semibold">C++</span> focused on clean memory management, time complexity minimization, and foundational data structures.
            </p>

            {/* Stat Card */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  LeetCode Problems Solved
                </span>
                <span className="text-4xl font-extrabold font-mono text-amber-400 mt-1 block">
                  {leetCodeStats.solvedCount}
                </span>
              </div>
              <a
                href={leetCodeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center gap-1.5 font-mono text-xs shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-2 pt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Primary Language: C++ (Standard Template Library)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Time & Space Complexity Optimization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Core DSA Topics Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">
              Core DSA Topics & Competencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {leetCodeStats.topics.map((topic) => (
                <div
                  key={topic.name}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold font-mono text-slate-100 group-hover:text-amber-300 transition-colors">
                      {topic.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                      {topic.level}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-slate-400 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
