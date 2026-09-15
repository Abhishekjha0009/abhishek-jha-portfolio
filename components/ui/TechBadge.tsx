'use client';

import React from 'react';

interface TechBadgeProps {
  name: string;
  category?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function TechBadge({ name, size = 'md' }: TechBadgeProps) {
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 font-mono text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all duration-200 ${sizeClasses[size]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-80" />
      {name}
    </span>
  );
}
