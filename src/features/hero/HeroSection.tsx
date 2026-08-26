"use client";

import * as React from "react";
import Link from "next/link";
import { PROFILE } from "@/shared/constants/profile";
import { Button } from "@/shared/components/ui/Button";
import { EditorialWireframe3D } from "@/shared/components/3d/EditorialWireframe3D";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full border-b-2 border-[#0A0A0A] bg-[#FAFAFA] pt-8 pb-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Headline Masthead */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 gsap-hero-title">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-[#EF4444] text-[#FAFAFA] text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 font-mono">
                COVER STORY
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#525252] font-body">
                REKAYASA SISTEM WEB & MOBILE // SUBANG, ID
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0A0A0A] leading-none uppercase">
              ANGGARA
              <br />
              <span className="text-[#0A0A0A] relative inline-block">
                SAPUTRA
                <span className="absolute bottom-1 left-0 w-full h-2 sm:h-3 bg-[#EF4444] -z-10 opacity-80" />
              </span>
            </h1>
          </div>

          <div className="md:max-w-xs text-left md:text-right flex flex-col justify-end">
            <span className="font-mono text-xs text-[#525252] block uppercase tracking-wider mb-1">
              DISIPLIN UTAMA
            </span>
            <p className="font-display text-base sm:text-lg text-[#0A0A0A] leading-snug">
              FULLSTACK WEB & CROSS-PLATFORM MOBILE
            </p>
          </div>
        </div>

        {/* Lead Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Editorial Lede (Left Column) */}
          <div className="lg:col-span-7 space-y-6 gsap-reveal">
            <p className="font-body text-xl sm:text-2xl text-[#0A0A0A] leading-snug font-normal">
              Membangun sistem perangkat lunak yang{" "}
              <strong className="font-bold underline decoration-[#EF4444] decoration-4">
                tangguh, modular, dan cepat
              </strong>{" "}
              — dari arsitektur backend REST API hingga aplikasi mobile berkinerja tinggi.
            </p>

            <p className="text-base sm:text-lg text-[#525252] leading-relaxed font-body">
              {PROFILE.subheadline} Berpengalaman dalam menerjemahkan kebutuhan bisnis dan tata
              kelola pemerintahan menjadi solusi kode yang terstruktur rapi, teruji, dan siap pakai
              di lingkungan produksi nyata.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="#projects">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>JELAJAHI KARYA PROYEK</span>
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="#contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>HUBUNGI LANGSUNG</span>
                </Button>
              </Link>
            </div>

            {/* Editorial Highlight Quote */}
            <div className="mt-8 border-l-4 border-l-[#EF4444] bg-[#F5F5F5] p-5 sm:p-6">
              <p className="text-base sm:text-lg italic text-[#0A0A0A] font-body leading-relaxed">
                &ldquo;Arsitektur kode yang baik bukan hanya tentang menulis fungsi yang berjalan,
                tetapi memastikan sistem tetap mudah dirawat, scalable, dan memberi nilai nyata bagi
                pengguna.&rdquo;
              </p>
              <div className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#525252] font-mono">
                — ANGGARA SAPUTRA // FILOSOFI ENGINEERING
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Canvas + Fact Matrix */}
          <div className="lg:col-span-5 space-y-6 gsap-reveal">
            {/* 3D Three.js Sculpture */}
            <EditorialWireframe3D />

            {/* Dossier Card */}
            <div className="border-2 border-[#0A0A0A] bg-[#FAFAFA] p-6 space-y-6">
              <div className="border-b-2 border-[#0A0A0A] pb-3 flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-wider text-[#0A0A0A]">
                  DOSSIER RINGKAS
                </span>
                <span className="font-mono text-[11px] text-[#EF4444] font-bold">REF #2026-AS</span>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {PROFILE.stats.map((stat, idx) => (
                  <div key={idx} className="border-b border-[#E5E5E5] pb-2 last:border-b-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#525252] block font-body">
                      {stat.label}
                    </span>
                    <span className="font-display text-lg sm:text-xl text-[#0A0A0A] block mt-0.5">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Badges */}
              <div className="pt-2 border-t-2 border-[#0A0A0A]">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#525252] block mb-2 font-mono">
                  CORE ARSENAL
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "NODE.JS",
                    "EXPRESS",
                    "FLUTTER",
                    "REACT",
                    "NEXT.JS",
                    "POSTGRESQL",
                    "LARAVEL",
                    "TYPESCRIPT",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-bold font-mono tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee / Ticker Tape */}
      <div className="mt-14 w-full bg-[#0A0A0A] text-[#FAFAFA] border-y-2 border-[#0A0A0A] py-2.5 overflow-hidden">
        <div className="animate-ticker font-mono text-xs font-bold uppercase tracking-[0.15em] flex items-center space-x-8">
          <span>PROYEK KOPDES // POS & ERP MULTI-ROLE</span>
          <span className="text-[#EF4444]">✦</span>
          <span>PROYEK SMARTDIGI // SUPER APP PEMKAB SUBANG</span>
          <span className="text-[#EF4444]">✦</span>
          <span>PROYEK E-RAPET // FLUTTER E-COMMERCE</span>
          <span className="text-[#EF4444]">✦</span>
          <span>SMK AL-INTISAB PATOKBEUSI RPL 2025</span>
          <span className="text-[#EF4444]">✦</span>
          <span>NODE.JS • REACT • FLUTTER • LARAVEL • POSTGRESQL</span>
          <span className="text-[#EF4444]">✦</span>
          <span>PROYEK KOPDES // POS & ERP MULTI-ROLE</span>
          <span className="text-[#EF4444]">✦</span>
          <span>PROYEK SMARTDIGI // SUPER APP PEMKAB SUBANG</span>
          <span className="text-[#EF4444]">✦</span>
          <span>PROYEK E-RAPET // FLUTTER E-COMMERCE</span>
          <span className="text-[#EF4444]">✦</span>
          <span>SMK AL-INTISAB PATOKBEUSI RPL 2025</span>
          <span className="text-[#EF4444]">✦</span>
          <span>NODE.JS • REACT • FLUTTER • LARAVEL • POSTGRESQL</span>
        </div>
      </div>
    </section>
  );
}
