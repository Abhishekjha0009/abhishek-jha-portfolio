'use client';

import React, { useEffect, useRef } from 'react';
import { SiteContentData } from '../../lib/data/fallbackData';
import { User, GraduationCap, Briefcase, Heart, Award, CheckCircle2 } from 'lucide-react';
import { useMasterAnimation } from '../gsap/MasterAnimationProvider';

interface AboutSectionProps {
  content: SiteContentData;
}

export function AboutSection({ content }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerRevealSection } = useMasterAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerRevealSection(sectionRef.current);
    }
  }, [registerRevealSection]);

  const { education, internship, aboutBio, interests } = content;

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <User className="w-3.5 h-3.5 text-cyan-400" />
          <span>DEVELOPER_PROFILE.human</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-100 tracking-tight">
          About & <span className="text-cyan-400">Background</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Human Bio & Genuine Interests */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold font-mono text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Beyond The Code
            </h3>
            {aboutBio.map((paragraph, idx) => (
              <p key={idx} className="text-sm font-sans text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-3 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                Personal Interests & Passions
              </span>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
                  >
                    ⚽ {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education & Internship Experience */}
        <div className="lg:col-span-6 space-y-6">
          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono text-slate-100">{education.degree}</h3>
                  <p className="text-xs font-mono text-slate-400">{education.institution}</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-semibold">
                CGPA: {education.cgpa}
              </span>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-1.5 pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between">
                <span>Timeline:</span>
                <span className="text-slate-200">{education.year}</span>
              </div>
              {education.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono text-slate-100">{internship.role}</h3>
                  <p className="text-xs font-mono text-slate-400">{internship.company} • {internship.type}</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-xs font-mono bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 font-semibold">
                {internship.duration}
              </span>
            </div>

            <ul className="space-y-2 text-xs font-sans text-slate-300 pt-2 border-t border-slate-800/80">
              {internship.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-indigo-400 font-bold">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
