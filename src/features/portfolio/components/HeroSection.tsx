"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "../data/portfolioData";
import { usePortfolioStore } from "../hooks/usePortfolioStore";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  const { setContactModalOpen } = usePortfolioStore();

  return (
    <section id="top" className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-secondary/30 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-muted/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portrait Card (Benjamin Style) */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-border bg-card glow-card">
              <Image
                src="/images/my-gallery/anggara-1.jpg"
                alt={PERSONAL_INFO.fullName}
                fill
                priority
                className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              {/* Year Stamp Inside Card */}
              <div className="absolute bottom-4 left-4 font-mono text-xs tracking-widest text-foreground bg-card/80 backdrop-blur-md px-3 py-1 rounded-full border border-border">
                / {PERSONAL_INFO.year} /
              </div>

              {/* Status Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-card/80 backdrop-blur-md px-3 py-1 rounded-full border border-border">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-mono text-foreground uppercase tracking-wider">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Typography & Actions */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
              <span>(About me)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
              I&apos;m <span className="text-primary">{PERSONAL_INFO.name}</span>, a {PERSONAL_INFO.role} based in {PERSONAL_INFO.locationShort}.
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline} {PERSONAL_INFO.bio}
            </p>

            {/* Bottom Bar: Scroll Indicator & CTA Button */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border/80">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <ArrowDown className="w-3.5 h-3.5 animate-bounce text-primary" />
                <span>Scroll down to explore</span>
              </div>

              {/* Pill Button (START THE PROJECT) */}
              <button
                onClick={() => setContactModalOpen(true)}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary text-foreground hover:text-primary text-xs font-mono tracking-wider uppercase transition-all duration-300 glow-card"
              >
                <span>START THE PROJECT</span>
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
