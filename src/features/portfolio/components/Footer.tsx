"use client";

import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/portfolioData";
import { usePortfolioStore } from "../hooks/usePortfolioStore";
import { MarqueeBanner } from "./MarqueeBanner";
import { ArrowUpRight, Copy, Globe } from "lucide-react";

export function Footer() {
  const { setContactModalOpen, setToastMessage } = usePortfolioStore();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setToastMessage("Email copied to clipboard!");
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-background border-t border-border overflow-hidden">
      {/* Giant Callout Section (Benjamin Style) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 mb-20">
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
          <span>( Have something bold in your mind? Let&apos;s </span>
          <span className="text-primary underline decoration-border decoration-wavy underline-offset-8">build it</span>
          <span> together! )</span>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => setContactModalOpen(true)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-card hover:bg-secondary text-foreground hover:text-primary text-sm font-mono tracking-wider uppercase transition-all duration-300 glow-card"
          >
            <span>START THE PROJECT</span>
            <div className="w-7 h-7 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Marquee Banner */}
      <MarqueeBanner
        text="LET'S CONNECT © LET'S CONNECT © LET'S CONNECT © LET'S CONNECT © "
        speed="normal"
        className="my-12"
      />

      {/* Bottom Swiss-Grid Info Box & Social Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Swiss Location Box (Left) */}
          <div className="md:col-span-5 border border-border bg-card rounded-lg overflow-hidden">
            <div className="p-3 text-xs font-mono text-foreground font-semibold border-b border-border">
              {PERSONAL_INFO.location}
            </div>
            <div className="grid grid-cols-12 text-xs font-mono">
              <div className="col-span-3 p-3 flex items-center justify-center border-r border-border bg-background">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div className="col-span-6 p-3 flex items-center border-r border-border text-muted-foreground">
                {PERSONAL_INFO.workingScope}
              </div>
              <div className="col-span-3 p-3 flex items-center justify-center text-primary font-bold bg-background">
                {PERSONAL_INFO.countryCode}
              </div>
            </div>
          </div>

          {/* Social Matrix & Email Copy (Right) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name} ↗
                </a>
              ))}
            </div>

            {/* Email with 1-Click Copy */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-border text-xs font-mono text-foreground hover:text-primary hover:bg-secondary transition-all"
                title="Click to copy email address"
              >
                <Copy className="w-3.5 h-3.5 text-primary" />
                <span>{PERSONAL_INFO.email}</span>
              </button>
            </div>

            {/* Copyright */}
            <div className="text-[11px] font-mono text-muted-foreground pt-4 border-t border-border/60">
              ©{PERSONAL_INFO.year} {PERSONAL_INFO.fullName.toUpperCase()}, ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
