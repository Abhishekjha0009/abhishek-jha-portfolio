'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SiteContentData } from '../../lib/data/fallbackData';
import { Mail, Code2, Copy, Check, Terminal, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { useMasterAnimation } from '../gsap/MasterAnimationProvider';

interface ContactSectionProps {
  content: SiteContentData;
}

export function ContactSection({ content }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerRevealSection } = useMasterAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerRevealSection(sectionRef.current);
    }
  }, [registerRevealSection]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl text-center relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>INITIATE_COMMUNICATION.sh</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-mono text-slate-100 tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">Exceptional</span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-slate-400 leading-relaxed max-w-xl mx-auto">
            I am currently seeking software engineering opportunities, internships, and full-stack development roles. Feel free to reach out directly.
          </p>

          {/* Email Copy Card */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="px-5 py-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm text-cyan-400 flex items-center gap-3 w-full sm:w-auto justify-between">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{content.socialLinks.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${content.socialLinks.email}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-mono text-sm font-semibold text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 w-full sm:w-auto transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>

          {/* Social Profiles Row */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4">
            <a
              href={content.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 flex items-center gap-2 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={content.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 flex items-center gap-2 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={content.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:border-amber-500/40 hover:text-amber-400 flex items-center gap-2 transition-all"
            >
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Footer Credit & Copyright */}
        <div className="mt-16 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} Abhishek Kumar. Built with Next.js 15, R3F, GSAP & Sanity.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </section>
  );
}
