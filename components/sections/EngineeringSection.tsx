'use client';

import React, { useEffect, useRef } from 'react';
import { Cpu, Layers, Database, Wifi, Lock, Cloud, Code2 } from 'lucide-react';
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
      code: "01 // NEXTJS_REACT_FRONTEND",
      title: "Modern Next.js & React Architecture",
      icon: Layers,
      color: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-950/20",
      description:
        "Built with Next.js 15 App Router, React Server & Client Components, TypeScript strict typing, and Tailwind CSS responsive layout systems for fast, clean user interfaces.",
      techStack: ["Next.js 15", "React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
    {
      code: "02 // FULL_STACK_MERN",
      title: "Production MERN Monolith & Micro-APIs",
      icon: Database,
      color: "text-indigo-400",
      border: "border-indigo-500/20",
      bg: "bg-indigo-950/20",
      description:
        "Express & Node.js backend servers handling complex CRUD operations, indexed MongoDB queries, sub-100ms API response targets, and structured RESTful route handlers.",
      techStack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "CRUD Systems"],
    },
    {
      code: "03 // REALTIME_WEBSOCKETS",
      title: "Event-Driven Real-Time Communication",
      icon: Wifi,
      color: "text-purple-400",
      border: "border-purple-500/20",
      bg: "bg-purple-950/20",
      description:
        "Bidirectional WebSocket communication using Socket.IO for municipal waste pickup notifications, live worker dispatching, and Leaflet GIS spatial coordinate tracking.",
      techStack: ["Socket.IO", "WebSockets", "Leaflet GIS", "OpenStreetMap", "Recharts"],
    },
    {
      code: "04 // AUTH_SECURITY",
      title: "Authentication & Role-Based Access",
      icon: Lock,
      color: "text-rose-400",
      border: "border-rose-500/20",
      bg: "bg-rose-950/20",
      description:
        "Stateless JWT authorization tokens, bcrypt password hashing, Firebase Auth Google OAuth integrations, and strict Role-Based Access Control (RBAC) across multi-user portals.",
      techStack: ["JWT Sessions", "Firebase Auth", "RBAC Security", "Bcrypt Hashing", "Protected APIs"],
    },
    {
      code: "05 // CLOUD_PAYMENT_PIPELINES",
      title: "Cloud Storage & Payment Integration",
      icon: Cloud,
      color: "text-emerald-400",
      border: "border-emerald-500/20",
      bg: "bg-emerald-950/20",
      description:
        "Cloudinary media CDN integration paired with Multer multipart file upload pipelines, combined with Razorpay API payment gateway processing for secure checkout flows.",
      techStack: ["Cloudinary CDN", "Multer Uploads", "Razorpay Gateway", "Asset Pipelines", "Payment APIs"],
    },
    {
      code: "06 // CPP_ALGORITHMS",
      title: "C++ Data Structures & Algorithms",
      icon: Code2,
      color: "text-amber-400",
      border: "border-amber-500/20",
      bg: "bg-amber-950/20",
      description:
        "Standard Template Library (STL) optimization, pointer arithmetic, memory management, and algorithmic problem solving across Arrays, Hashing, Binary Search, and Dynamic Programming.",
      techStack: ["C++ STL", "Data Structures", "Algorithms", "Time Complexity", "Memory Management"],
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
          Technical documentation outlining the architectural patterns, full-stack engineering, and problem solving powering this platform.
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
