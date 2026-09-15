'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ProjectData } from '../../lib/data/fallbackData';
import { TechBadge } from '../ui/TechBadge';
import { FolderGit2, ExternalLink, ChevronRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { CaseStudyModal } from '../ui/CaseStudyModal';
import { useMasterAnimation } from '../gsap/MasterAnimationProvider';

interface ProjectsSectionProps {
  projects: ProjectData[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerRevealSection } = useMasterAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerRevealSection(sectionRef.current);
    }
  }, [registerRevealSection]);

  const categories = ['All', 'Full Stack', 'MERN', 'Real-Time'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header & Category Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRODUCTION_CASE_STUDIES.log</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-100 tracking-tight">
            Featured Full-Stack <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-sm font-sans text-slate-400 mt-2 max-w-xl">
            Detailed engineering breakdowns of real production platforms I designed, architected, and built.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid / Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]"
          >
            <div>
              {/* Card Badge & Title */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-slate-500">Case Study 0{project.order}</span>
              </div>

              <h3 className="text-2xl font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1 leading-relaxed">{project.tagline}</p>

              {/* Architectural Highlights */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                  <Cpu className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-rose-400 font-semibold block text-[11px]">Problem</span>
                    <span className="text-slate-300 line-clamp-2">{project.problem}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                  <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-cyan-400 font-semibold block text-[11px]">Architecture</span>
                    <span className="text-slate-300 line-clamp-2">{project.architecture}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech) => (
                  <TechBadge key={tech} name={tech} size="sm" />
                ))}
                {project.technologies.length > 6 && (
                  <span className="text-[11px] font-mono text-slate-500 self-center">
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(project)}
                className="px-4 py-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
              >
                <span>Read Architectural Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal Drawer */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
