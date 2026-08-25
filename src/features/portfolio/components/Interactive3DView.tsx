"use client";

import React, { useRef } from "react";
import { FloatingGeometry3D } from "@/shared/components/3d/FloatingGeometry3D";
import { ArrowUpRight, Box, Cpu, Sparkles } from "lucide-react";
import { usePortfolioStore } from "../hooks/usePortfolioStore";

export function Interactive3DView() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setContactModalOpen } = usePortfolioStore();

  return (
    <section
      ref={sectionRef}
      id="space3d"
      className="py-24 border-t border-border relative overflow-hidden bg-background"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse" />
              <span>(Interactive 3D Engine //)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Arsitektur WebGL & Interaksi Spasial
            </h2>
          </div>

          <div className="font-mono text-xs text-muted-foreground flex items-center gap-4">
            <span>[ THREE.JS ]</span>
            <span>[ GSAP 3.12 ]</span>
            <span>[ 60 FPS ]</span>
          </div>
        </div>

        {/* 3D Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 lg:p-12 relative">
          {/* Left Column: 3D Interactive Canvas */}
          <div className="lg:col-span-7 relative rounded-xl border border-border bg-card overflow-hidden">
            <FloatingGeometry3D />
          </div>

          {/* Right Column: Editorial Details & Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary text-primary font-mono text-xs">
                <Box className="w-3.5 h-3.5" />
                <span>POLYHEDRAL CORE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Menggabungkan Presisi Kode & Estetika Tiga Dimensi
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Eksplorasi antarmuka masa depan dengan render shader WebGL, komputasi partikel real-time, dan orkestrasi timeline GSAP yang mulus. Setiap elemen dibangun dengan prinsip optimasi daya dan responsivitas tinggi di semua perangkat.
              </p>
            </div>

            {/* Tech Specs Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-border bg-card/80 space-y-1">
                <div className="flex items-center gap-2 text-primary text-xs font-mono">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>DAMPING</span>
                </div>
                <div className="text-lg font-bold text-foreground">0.08 Inertia</div>
                <div className="text-[11px] text-muted-foreground">Physics Mouse Orbit</div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/80 space-y-1">
                <div className="flex items-center gap-2 text-primary text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SYNCHRONIZED</span>
                </div>
                <div className="text-lg font-bold text-foreground">ScrollTrigger</div>
                <div className="text-[11px] text-muted-foreground">Dynamic Multi-Axis</div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button
                onClick={() => setContactModalOpen(true)}
                data-magnetic="true"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-border bg-card hover:bg-secondary text-foreground hover:text-primary text-xs font-mono tracking-wider uppercase transition-all duration-300 glow-card w-full sm:w-auto justify-center"
              >
                <span>BANGUN PROYEK INTERAKTIF</span>
                <div className="w-6 h-6 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
