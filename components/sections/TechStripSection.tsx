'use client';

import React from 'react';
import { TechnologyData } from '../../lib/data/fallbackData';
import { useMasterAnimation } from '../gsap/MasterAnimationProvider';
import { TechBadge } from '../ui/TechBadge';

interface TechStripSectionProps {
  technologies: TechnologyData[];
}

export function TechStripSection({ technologies }: TechStripSectionProps) {
  const { scrollVelocity, scrollDirection } = useMasterAnimation();

  // Double the technology array for seamless infinite marquee loop
  const marqueeRow1 = [...technologies, ...technologies];
  const marqueeRow2 = [...technologies.slice().reverse(), ...technologies.slice().reverse()];

  // Calculate dynamic animation speed based on scroll velocity
  const baseSpeed = 25; // seconds for full cycle
  const speedMultiplier = 1 + scrollVelocity * 0.4;
  const currentDuration = Math.max(8, baseSpeed / speedMultiplier);

  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-slate-950/40 backdrop-blur-xl overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="uppercase tracking-wider font-semibold text-slate-200">Tech Stack Marquee</span>
          <span className="text-slate-600">// Velocity Reactive</span>
        </div>
        <div className="hidden sm:block font-mono text-[11px] text-slate-500">
          Velocity: <span className="text-cyan-400">{scrollVelocity.toFixed(1)}x</span> | Direction:{' '}
          <span className="text-indigo-400">{scrollDirection > 0 ? 'FORWARDS' : 'REVERSE'}</span>
        </div>
      </div>

      {/* Row 1: Left to Right Marquee */}
      <div className="flex overflow-hidden select-none py-2 mask-radial">
        <div
          className="flex gap-3 shrink-0 animate-marquee"
          style={{
            animationDuration: `${currentDuration}s`,
            animationDirection: scrollDirection > 0 ? 'normal' : 'reverse',
          }}
        >
          {marqueeRow1.map((tech, idx) => (
            <TechBadge key={`${tech.name}-row1-${idx}`} name={tech.name} size="md" />
          ))}
        </div>
        <div
          className="flex gap-3 shrink-0 animate-marquee"
          aria-hidden="true"
          style={{
            animationDuration: `${currentDuration}s`,
            animationDirection: scrollDirection > 0 ? 'normal' : 'reverse',
          }}
        >
          {marqueeRow1.map((tech, idx) => (
            <TechBadge key={`${tech.name}-row1-dup-${idx}`} name={tech.name} size="md" />
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left Marquee */}
      <div className="flex overflow-hidden select-none py-2 mt-2 mask-radial">
        <div
          className="flex gap-3 shrink-0 animate-marquee-reverse"
          style={{
            animationDuration: `${currentDuration * 1.2}s`,
            animationDirection: scrollDirection > 0 ? 'normal' : 'reverse',
          }}
        >
          {marqueeRow2.map((tech, idx) => (
            <TechBadge key={`${tech.name}-row2-${idx}`} name={tech.name} size="md" />
          ))}
        </div>
        <div
          className="flex gap-3 shrink-0 animate-marquee-reverse"
          aria-hidden="true"
          style={{
            animationDuration: `${currentDuration * 1.2}s`,
            animationDirection: scrollDirection > 0 ? 'normal' : 'reverse',
          }}
        >
          {marqueeRow2.map((tech, idx) => (
            <TechBadge key={`${tech.name}-row2-dup-${idx}`} name={tech.name} size="md" />
          ))}
        </div>
      </div>
    </section>
  );
}
