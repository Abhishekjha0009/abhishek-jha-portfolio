'use client';

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { initGSAP, gsap, ScrollTrigger } from '../../lib/gsap/gsapSetup';

interface AnimationContextType {
  scrollVelocity: number;
  scrollDirection: number;
  registerRevealSection: (element: HTMLElement) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  scrollVelocity: 0,
  scrollDirection: 1,
  registerRevealSection: () => {},
});

export const useMasterAnimation = () => useContext(AnimationContext);

export function MasterAnimationProvider({ children }: { children: React.ReactNode }) {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const ctxRef = useRef<gsap.Context | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    initGSAP();

    // GSAP context wrapper for clean lifecycle scoping
    ctxRef.current = gsap.context(() => {
      let velocityTimeout: NodeJS.Timeout;

      const updateScrollMetrics = () => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        lastScrollY.current = currentScrollY;

        const dir = delta >= 0 ? 1 : -1;
        const vel = Math.min(Math.abs(delta) / 10, 10);

        setScrollDirection(dir);
        setScrollVelocity(vel);

        clearTimeout(velocityTimeout);
        velocityTimeout = setTimeout(() => {
          setScrollVelocity(0);
        }, 150);
      };

      window.addEventListener('scroll', updateScrollMetrics, { passive: true });

      return () => {
        window.removeEventListener('scroll', updateScrollMetrics);
        clearTimeout(velocityTimeout);
      };
    });

    return () => {
      if (ctxRef.current) ctxRef.current.revert();
    };
  }, []);

  const registerRevealSection = (element: HTMLElement) => {
    if (!element || typeof window === 'undefined') return;
    initGSAP();

    gsap.fromTo(
      element,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  return (
    <AnimationContext.Provider
      value={{
        scrollVelocity,
        scrollDirection,
        registerRevealSection,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}
