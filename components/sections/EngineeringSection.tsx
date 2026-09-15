'use client';

import React, { useEffect, useRef } from 'react';
import { Cpu, Terminal, Layers, Shield, Layout, Database, Wifi, Lock } from 'lucide-react';
import { useMasterAnimation } from '../gsap/MasterAnimationProvider';

export function EngineeringSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerRevealSection } = useMasterAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerRevealSection(sectionRef.current);
    }
  }, [registerRevealSection]);

  const specs = [
    {
      code: "01 // NEXTJS_APP_ROUTER",
      title: "Modern Next.js & React Architecture",
      icon: Layout,
      color: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-950/20",
      description:
        "Built with Next.js 15 App Router, React Server & Client Components, TypeScript strict typing, and Tailwind CSS responsive styling for production web applications.",
      techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "App Router"],
    },
    {
      code: "02 // GSAP_MASTER_ANIMATION",
      title: "Centralized GSAP Scroll Architecture",
      icon: Layers,
      color: "text-indigo-400",
      border: "border-indigo-500/20",
      bg: "bg-indigo-950/20",
      description:
        "Unified GSAP ScrollTrigger timeline controller preventing listener collision or memory leaks. Includes scroll velocity calculation driving the interactive technology marquee speed and direction.",
      techStack: ["GSAP 3", "ScrollTrigger", "Velocity Observer", "Context Cleanup", "Timeline Staggers"],
    },
    {
      code: "03 // HEADLESS_CMS_SANITY",
      title: "Sanity Headless CMS Workflow",
      icon: Terminal,
      color: "text-amber-400",
      border: "border-amber-500/20",
      bg: "bg-amber-950/20",
      description:
        "Complete headless CMS setup with GROQ queries, structured schema validation (Projects, Skills, Content), embedded Sanity Studio (/studio), and seamless fallback data layers for instant local previews.",
      techStack: ["Sanity CMS", "GROQ API", "Embedded Studio", "Schema Validation", "Fallback Data Pipeline"],
    },
    {
      code: "04 // FULL_STACK_MERN",
      title: "Production MERN Monolith & Micro-APIs",
      icon: Database,
      color: "text-emerald-400",
      border: "border-emerald-500/20",
      bg: "bg-emerald-950/20",
      description:
        "Express & Node.js backend servers handling complex CRUD, indexed MongoDB queries, sub-100ms response targets, Razorpay payment flows, and Cloudinary media upload pipelines.",
      techStack: ["Node.js", "Express.js", "MongoDB Indexing", "REST APIs", "Cloudinary Multer"],
    },
    {
      code: "05 // REALTIME_WEBSOCKETS",
      title: "Event-Driven Real-Time Communication",
      icon: Wifi,
      color: "text-purple-400",
      border: "border-purple-500/20",
      bg: "bg-purple-950/20",
      description:
        "Bidirectional WebSocket multiplexing using Socket.IO for municipal waste pickup notifications, live worker dispatching, and Leaflet GIS spatial coordinate tracking.",
      techStack: ["Socket.IO", "WebSockets", "Leaflet GIS", "OpenStreetMap", "Recharts Analytics"],
    },
    {
      code: "06 // AUTH_SECURITY",
      title: "Authentication & Role-Based Access",
      icon: Lock,
      color: "text-rose-400",
      border: "border-rose-500/20",
      bg: "bg-rose-950/20",
      description:
        "Stateless JWT authorization tokens, bcrypt password hashing, Firebase Auth Google OAuth integrations, and strict Role-Based Access Control (RBAC) across multi-user portals.",
      techStack: ["JWT Sessions", "Firebase Auth", "RBAC Security", "Bcrypt Hashing", "Protected Gateways"],
    },
  ];

  return (
    <section id="engineering" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>PORTFOLIO_ENGINEERING_SPECIFICATION.md</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-100 tracking-tight">
          What This Portfolio <span className="text-cyan-400">Demonstrates</span>
        </h2>
        <p className="text-sm sm:text-base font-sans text-slate-400 mt-2 max-w-2xl">
          Technical documentation outlining the architectural patterns, master animations, and full-stack engineering powering this platform.
        </p>
      </div>

      {/* Specification Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specs.map((spec, index) => {
          const Icon = spec.icon;
          return (
            <div
              key={spec.code}
              className={`group relative p-6 rounded-2xl bg-slate-900/60 border ${spec.border} hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-[0_0_25px_rgba(0,240,255,0.1)]`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] font-semibold text-slate-400 tracking-wide">
                    {spec.code}
                  </span>
                  <div className={`p-2 rounded-lg ${spec.bg} ${spec.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {spec.title}
                </h3>

                <p className="text-xs font-sans text-slate-300 leading-relaxed mt-3">
                  {spec.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {spec.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
