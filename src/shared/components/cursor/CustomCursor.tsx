"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view" | "drag">("default");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only enable on desktop pointer devices and without reduced-motion preference
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Quick setters for 60fps performance
    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    const followerX = gsap.quickTo(follower, "x", { duration: 0.35, ease: "power3.out" });
    const followerY = gsap.quickTo(follower, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const targetX = e.clientX;
      const targetY = e.clientY;

      cursorX(targetX);
      cursorY(targetY);

      followerX(targetX);
      followerY(targetY);

      // Detect interactive element beneath cursor
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("button, a, [data-cursor], [data-magnetic]");

      if (interactiveEl) {
        const cursorData = interactiveEl.getAttribute("data-cursor");
        if (cursorData === "view") {
          setCursorVariant("view");
          setCursorText("VIEW ↗");
        } else if (cursorData === "drag") {
          setCursorVariant("drag");
          setCursorText("DRAG ↔");
        } else {
          setCursorVariant("hover");
          setCursorText("");
        }
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(cursor);
      gsap.killTweensOf(follower);
    };
  }, [isVisible]);

  return (
    <>
      {/* Center Precision Dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${cursorVariant === "view" || cursorVariant === "drag" ? "opacity-0" : ""}`}
      />

      {/* Outer Follower Ring / Badge */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] flex items-center justify-center transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorVariant === "hover"
            ? "w-12 h-12 rounded-full border border-primary/60 bg-primary/10 backdrop-blur-xs scale-110"
            : cursorVariant === "view" || cursorVariant === "drag"
              ? "px-4 py-2 rounded-full bg-primary text-primary-foreground text-[10px] font-mono font-bold tracking-widest border border-primary shadow-lg shadow-primary/20 scale-100"
              : "w-8 h-8 rounded-full border border-primary/30 scale-100"
        }`}
      >
        {(cursorVariant === "view" || cursorVariant === "drag") && (
          <span ref={labelRef} className="select-none uppercase whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
