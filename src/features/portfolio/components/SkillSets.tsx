"use client";

import React, { useState, useEffect, useRef } from "react";
import { SKILL_CAPABILITIES } from "../data/portfolioData";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SkillSets() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = listRef.current?.querySelectorAll(".skill-item-row");
      if (items && items.length > 0) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
          },
          opacity: 0,
          x: -25,
          stagger: 0.08,
          duration: 0.7,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span>(Keahlian Teknis)</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Core <br />
              <span className="text-primary">skill sets</span>
            </h2>

            <div className="w-24 h-1 bg-secondary rounded-full" />

            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <div className="text-xs font-mono text-primary font-semibold">
                (DEV® — 2026)
              </div>
              <p>
                Menghadirkan proses rekayasa perangkat lunak end-to-end yang terintegrasi: mulai dari arsitektur backend RESTful API dengan Node.js & Laravel, antarmuka web interaktif Three.js, ReactJS/Next.js, hingga aplikasi mobile Flutter yang responsif dan performan.
              </p>
            </div>
          </div>

          {/* Right Column: Numbered Capabilities List (Benjamin Style) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-border text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-foreground font-bold text-sm">Kapabilitas Utama</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <span>(06 Pilar Keahlian)</span>
            </div>

            <div ref={listRef} className="divide-y divide-border">
              {SKILL_CAPABILITIES.map((skill, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <div
                    key={skill.number}
                    className="skill-item-row py-5 transition-colors cursor-pointer group"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                          {skill.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {skill.title}
                        </h3>
                      </div>
                      <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                        <span className="hidden sm:inline-block text-[11px] text-muted-foreground">
                          {skill.subtitle}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-primary" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="pt-3 pl-8 sm:pl-12 text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-300">
                        {skill.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
