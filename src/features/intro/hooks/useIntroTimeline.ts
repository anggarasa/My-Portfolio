"use client";

import * as React from "react";
import gsap from "gsap";

export interface IntroTimelineState {
  progress: number;
  statusText: string;
  isComplete: boolean;
}

const TELEMETRY_STEPS = [
  { threshold: 0, text: "INITIALIZING VOICEBOX CORE ENGINE..." },
  { threshold: 25, text: "ALLOCATING 3D GEOMETRIC WIREFRAME MATRIX..." },
  { threshold: 55, text: "CALIBRATING EDITORIAL TYPOGRAPHY & TOKENS..." },
  { threshold: 85, text: "SYNCING LENIS VIEWPORT RENDERER..." },
  { threshold: 100, text: "INITIALIZATION COMPLETE // SYSTEM READY" },
];

export function useIntroTimeline(onCompleteAnimation?: () => void) {
  const [isReducedMotion] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  const [progress, setProgress] = React.useState(isReducedMotion ? 100 : 0);
  const [statusText, setStatusText] = React.useState(
    isReducedMotion ? TELEMETRY_STEPS[TELEMETRY_STEPS.length - 1].text : TELEMETRY_STEPS[0].text,
  );
  const [isComplete, setIsComplete] = React.useState(isReducedMotion);
  const [isExiting, setIsExiting] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const topCurtainRef = React.useRef<HTMLDivElement>(null);
  const bottomCurtainRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleSkip = React.useCallback(() => {
    if (isComplete) return;
    setIsExiting(true);
    setIsComplete(true);
    if (onCompleteAnimation) {
      onCompleteAnimation();
    }
  }, [isComplete, onCompleteAnimation]);

  React.useEffect(() => {
    if (isReducedMotion) {
      if (onCompleteAnimation) {
        onCompleteAnimation();
      }
      return;
    }

    const progressObj = { value: 0 };

    const tl = gsap.timeline({
      onUpdate: () => {
        const currentVal = Math.round(progressObj.value);
        setProgress(currentVal);

        // Update status text based on threshold
        for (let i = TELEMETRY_STEPS.length - 1; i >= 0; i--) {
          if (currentVal >= TELEMETRY_STEPS[i].threshold) {
            setStatusText(TELEMETRY_STEPS[i].text);
            break;
          }
        }
      },
      onComplete: () => {
        setIsExiting(true);

        // Exit shutter transition
        const exitTl = gsap.timeline({
          delay: 0.25,
          onComplete: () => {
            setIsComplete(true);
            if (onCompleteAnimation) {
              onCompleteAnimation();
            }
          },
        });

        if (contentRef.current) {
          exitTl.to(contentRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            ease: "power2.inOut",
          });
        }

        if (topCurtainRef.current && bottomCurtainRef.current) {
          exitTl.to(
            topCurtainRef.current,
            {
              yPercent: -100,
              duration: 0.8,
              ease: "power4.inOut",
            },
            "-=0.1",
          );

          exitTl.to(
            bottomCurtainRef.current,
            {
              yPercent: 100,
              duration: 0.8,
              ease: "power4.inOut",
            },
            "<",
          );
        }
      },
    });

    // Animate progress 0 -> 100
    tl.to(progressObj, {
      value: 100,
      duration: 2.0,
      ease: "power2.inOut",
    });

    // Keyboard ESC shortcut to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        tl.kill();
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      tl.kill();
    };
  }, [handleSkip, isReducedMotion, onCompleteAnimation]);

  return {
    progress,
    statusText,
    isComplete,
    isExiting,
    containerRef,
    topCurtainRef,
    bottomCurtainRef,
    contentRef,
    handleSkip,
  };
}
