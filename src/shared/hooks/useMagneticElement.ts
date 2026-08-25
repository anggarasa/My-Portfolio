"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MagneticOptions {
  strength?: number; // Nilai tarikan (default: 0.35)
  ease?: string;
  duration?: number;
}

export function useMagneticElement<T extends HTMLElement = HTMLButtonElement>(
  options: MagneticOptions = {},
) {
  const elementRef = useRef<T | null>(null);
  const { strength = 0.35, ease = "power2.out", duration = 0.4 } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration, ease });
    const yTo = gsap.quickTo(el, "y", { duration, ease });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      xTo(distanceX * strength);
      yTo(distanceY * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [strength, ease, duration]);

  return elementRef;
}
