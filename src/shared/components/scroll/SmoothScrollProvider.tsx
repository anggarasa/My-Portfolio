"use client";

import React, { createContext, useContext, useEffect, useRef, useCallback, useMemo } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollContextType {
  getLenis: () => Lenis | null;
  scrollTo: (
    target: string | HTMLElement,
    options?: { offset?: number; duration?: number },
  ) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  getLenis: () => null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const getLenis = useCallback(() => lenisRef.current, []);

  const scrollTo = useCallback(
    (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, {
          offset: options?.offset ?? 0,
          duration: options?.duration ?? 1.2,
        });
      } else {
        const el = typeof target === "string" ? document.querySelector(target) : target;
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [],
  );

  const contextValue = useMemo(() => ({ getLenis, scrollTo }), [getLenis, scrollTo]);

  return (
    <SmoothScrollContext.Provider value={contextValue}>{children}</SmoothScrollContext.Provider>
  );
}
