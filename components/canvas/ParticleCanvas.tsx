'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';

interface ParticleCanvasProps {
  scrollVelocity?: number;
}

export function ParticleCanvas({ scrollVelocity = 0 }: ParticleCanvasProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    // Check WebGL context support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMounted) return null;

  if (!hasWebGL) {
    // Subtle CSS Mesh gradient fallback if WebGL fails
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/20 blur-[140px] animate-pulse delay-1000" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={isMobile ? 1 : [1, 2]}
        gl={{ powerPreference: 'high-performance', alpha: true, antialias: false }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <ParticleField
            particleCount={isMobile ? 1200 : 4000}
            scrollVelocity={scrollVelocity}
          />
        </Suspense>
      </Canvas>
      {/* Radial vignette mask to subtly frame content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.75)_80%,rgba(10,10,15,1)_100%)] pointer-events-none" />
    </div>
  );
}
