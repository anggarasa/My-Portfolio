"use client";

import * as React from "react";
import { IntroThreeCanvas } from "./components/IntroThreeCanvas";
import { useIntroTimeline } from "./hooks/useIntroTimeline";

export interface OpeningAnimationProps {
  onFinished?: () => void;
}

export function OpeningAnimation({ onFinished }: OpeningAnimationProps) {
  const handleAnimationComplete = React.useCallback(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }
    if (onFinished) {
      onFinished();
    }
  }, [onFinished]);

  const {
    progress,
    statusText,
    isComplete,
    isExiting,
    topCurtainRef,
    bottomCurtainRef,
    contentRef,
    handleSkip,
  } = useIntroTimeline(handleAnimationComplete);

  // Lock body scroll while active
  React.useEffect(() => {
    if (!isComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isComplete]);

  if (isComplete) {
    return null;
  }

  // Format 3-digit progress e.g. "007%", "045%", "100%"
  const formattedProgress = String(progress).padStart(3, "0");

  return (
    <div
      role="dialog"
      aria-label="Opening Animation Preloader"
      className="fixed inset-0 z-50 pointer-events-auto flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Shutter Curtain */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#0A0A0A] border-b border-[#262626] z-10 will-change-transform"
      />

      {/* Bottom Shutter Curtain */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0A0A0A] border-t border-[#262626] z-10 will-change-transform"
      />

      {/* Main Content Stage (Layered above curtains) */}
      <div
        ref={contentRef}
        className="relative z-20 w-full h-full flex flex-col justify-between p-4 sm:p-8 text-[#FAFAFA]"
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b-2 border-[#262626] pb-3 text-xs sm:text-sm font-mono uppercase tracking-wider">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-[#EF4444] inline-block animate-pulse" />
            <span className="font-bold text-[#FAFAFA]">VOICEBOX // INTRO MATRIX</span>
            <span className="hidden sm:inline text-[#737373]">| PORTFOLIO 2026</span>
          </div>

          <button
            onClick={handleSkip}
            className="px-3 py-1 bg-[#171717] hover:bg-[#EF4444] hover:text-[#FAFAFA] border border-[#404040] transition-colors duration-150 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#D4D4D4] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
            aria-label="Skip opening animation"
          >
            SKIP INTRO [ESC]
          </button>
        </div>

        {/* Center Geometric Core & Typography */}
        <div className="relative flex-1 flex flex-col items-center justify-center my-auto">
          {/* Three.js 3D Wireframe Canvas Backdrop */}
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <IntroThreeCanvas progress={progress} isExiting={isExiting} />
          </div>

          {/* Central Editorial Headlines & Percentage Counter */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl pointer-events-none">
            <div className="inline-block bg-[#EF4444] text-[#0A0A0A] px-2 py-0.5 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-3">
              SYSTEM INITIALIZATION
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#FAFAFA] leading-none mb-2">
              ANGGARA SAPUTRA
            </h1>

            <p className="font-mono text-xs sm:text-sm text-[#A3A3A3] uppercase tracking-widest mb-6">
              FULLSTACK WEB & MOBILE DEVELOPER
            </p>

            {/* Giant Monospace Numeric Percentage */}
            <div className="font-mono font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#FAFAFA] flex items-baseline">
              <span>{formattedProgress}</span>
              <span className="text-[#EF4444] text-3xl sm:text-4xl ml-1">%</span>
            </div>
          </div>
        </div>

        {/* Bottom Technical Telemetry & Progress Indicator */}
        <div className="border-t-2 border-[#262626] pt-3 flex flex-col space-y-2 font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-xs text-[#A3A3A3] uppercase">
            <div className="flex items-center space-x-2">
              <span className="text-[#EF4444] font-bold">&gt;&gt;</span>
              <span className="text-[#FAFAFA] font-medium tracking-wide">{statusText}</span>
            </div>
            <div className="mt-1 sm:mt-0 flex items-center space-x-3 text-[10px]">
              <span>60 FPS THREE.JS WEBGL</span>
              <span className="text-[#525252]">|</span>
              <span className="text-[#EF4444]">STAGE: BOOTSTRAP</span>
            </div>
          </div>

          {/* Precision Red Accent Progress Bar */}
          <div className="w-full h-1.5 bg-[#171717] border border-[#262626] overflow-hidden">
            <div
              className="h-full bg-[#EF4444] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
