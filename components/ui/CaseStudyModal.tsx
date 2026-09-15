'use client';

import React, { useEffect } from 'react';
import { ProjectData } from '../../lib/data/fallbackData';
import { X, ExternalLink, Cpu, ShieldCheck, Layers, Wrench, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { TechBadge } from './TechBadge';

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0e15] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] p-6 sm:p-8 z-10 text-slate-200 custom-scrollbar">
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                {project.category} Architecture
              </span>
              <span className="text-xs font-mono text-slate-500">ID: {project.id}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-slate-100">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-slate-400 mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Engineering Breakdown Flow */}
        <div className="space-y-8">
          {/* Step 1: Problem Statement */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5">
            <h3 className="text-sm font-mono font-semibold text-rose-400 flex items-center gap-2 mb-2 uppercase tracking-wide">
              <Cpu className="w-4 h-4 text-rose-400" />
              01 // Problem Statement
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 font-sans">{project.problem}</p>
          </div>

          {/* Step 2: System Architecture */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5">
            <h3 className="text-sm font-mono font-semibold text-cyan-400 flex items-center gap-2 mb-2 uppercase tracking-wide">
              <Layers className="w-4 h-4 text-cyan-400" />
              02 // Architectural Design
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 font-sans">{project.architecture}</p>
          </div>

          {/* Step 3: Technical Implementation */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5">
            <h3 className="text-sm font-mono font-semibold text-emerald-400 flex items-center gap-2 mb-2 uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              03 // Implementation & Technical Solution
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 font-sans">{project.solution}</p>
          </div>

          {/* Step 4: Key Technical Features */}
          <div>
            <h3 className="text-sm font-mono font-semibold text-slate-300 flex items-center gap-2 mb-4 uppercase tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              04 // Engineering Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-xs text-slate-300"
                >
                  <span className="font-mono text-cyan-400 font-bold text-[11px] mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 5: Technology Stack */}
          <div>
            <h3 className="text-sm font-mono font-semibold text-slate-300 flex items-center gap-2 mb-3 uppercase tracking-wide">
              <Wrench className="w-4 h-4 text-cyan-400" />
              05 // Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} size="md" />
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 hover:border-cyan-400 hover:text-cyan-400 flex items-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-xs font-mono font-medium text-slate-950 hover:brightness-110 flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Production Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-slate-200"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
