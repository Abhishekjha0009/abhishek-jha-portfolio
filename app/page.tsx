import React from 'react';
import { fetchProjects, fetchTechnologies, fetchSiteContent } from '../lib/sanity/client';
import { MasterAnimationProvider } from '../components/gsap/MasterAnimationProvider';
import { ParticleCanvas } from '../components/canvas/ParticleCanvas';
import { Navbar } from '../components/ui/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { TechStripSection } from '../components/sections/TechStripSection';
import { EngineeringSection } from '../components/sections/EngineeringSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { DSASection } from '../components/sections/DSASection';
import { AboutSection } from '../components/sections/AboutSection';
import { ContactSection } from '../components/sections/ContactSection';

// Enable ISR or dynamic server rendering with 60-second revalidation
export const revalidate = 60;

export default async function HomePage() {
  // Fetch Sanity data (with built-in fallback dataset)
  const [projects, technologies, siteContent] = await Promise.all([
    fetchProjects(),
    fetchTechnologies(),
    fetchSiteContent(),
  ]);

  return (
    <MasterAnimationProvider>
      <main className="relative min-h-screen bg-[#0a0a0f] text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
        {/* Interactive WebGL GLSL Shader Particle Background */}
        <ParticleCanvas />

        {/* Floating Glass Navbar */}
        <Navbar />

        {/* Section Flow */}
        <HeroSection content={siteContent} />
        <TechStripSection technologies={technologies} />
        <EngineeringSection />
        <ProjectsSection projects={projects} />
        <DSASection content={siteContent} />
        <AboutSection content={siteContent} />
        <ContactSection content={siteContent} />
      </main>
    </MasterAnimationProvider>
  );
}
