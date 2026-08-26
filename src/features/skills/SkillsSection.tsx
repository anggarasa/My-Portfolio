"use client";

import * as React from "react";
import { SKILLS } from "@/shared/constants/skills";
import { StatusChip } from "@/shared/components/ui/Chip";
import { Server, Smartphone, Code, Database } from "lucide-react";

export function SkillsSection() {
  const categories = [
    {
      key: "BACKEND",
      label: "BACKEND ARCHITECTURE",
      icon: Server,
      desc: "Perancangan RESTful API, otentikasi JWT, relasi database, dan skalabilitas.",
    },
    {
      key: "FRONTEND",
      label: "FRONTEND INTERFACE",
      icon: Code,
      desc: "Aplikasi web modern type-safe, React 19, Next.js, dan design token semantik.",
    },
    {
      key: "MOBILE",
      label: "MOBILE CROSS-PLATFORM",
      icon: Smartphone,
      desc: "Aplikasi Flutter berperforma tinggi untuk Android & iOS dengan caching offline.",
    },
    {
      key: "DATABASE & TOOLS",
      label: "DATABASE & DEVOPS",
      icon: Database,
      desc: "PostgreSQL, MySQL, Git workflow, Linux VPS, dan deployment terotomasi.",
    },
  ];

  return (
    <section id="skills" className="w-full border-b-2 border-[#0A0A0A] bg-[#FAFAFA] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#EF4444] font-mono">
                ARSENAL REKAYASA // SEKSI 03
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0A0A0A] uppercase">
              KAPABILITAS TEKNIS
            </h2>
            <p className="text-sm sm:text-base text-[#525252] mt-2 max-w-2xl font-body">
              Matriks penguasaan teknologi yang telah diaplikasikan langsung dalam proyek nyata
              dengan standar clean code dan arsitektur modular.
            </p>
          </div>
          <div className="font-mono text-xs font-bold text-[#525252] uppercase">
            TOTAL 08 CORE DOMAINS
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const catSkills = SKILLS.filter((s) => s.category === cat.key);

            return (
              <div
                key={cat.key}
                className="border-2 border-[#0A0A0A] bg-[#FAFAFA] flex flex-col justify-between"
              >
                {/* Category Header */}
                <div className="bg-[#0A0A0A] text-[#FAFAFA] p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Icon className="h-4 w-4 text-[#EF4444]" />
                    <h3 className="font-display text-sm tracking-wide">{cat.label}</h3>
                  </div>
                </div>

                {/* Content Skills List */}
                <div className="p-4 space-y-4 flex-1">
                  <p className="text-xs text-[#525252] leading-relaxed pb-3 border-b border-[#E5E5E5] font-body">
                    {cat.desc}
                  </p>

                  <div className="space-y-4">
                    {catSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="border border-[#D4D4D4] bg-[#F5F5F5] p-3 space-y-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display text-xs text-[#0A0A0A]">{skill.name}</span>
                          <StatusChip variant={skill.level === "PROFICIENT" ? "info" : "neutral"}>
                            {skill.level}
                          </StatusChip>
                        </div>
                        <p className="text-[11px] text-[#525252] leading-relaxed font-body">
                          {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-1.5 py-0.5 bg-[#FAFAFA] text-[#0A0A0A] border border-[#D4D4D4] text-[9px] font-mono font-bold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Indicator */}
                <div className="bg-[#F5F5F5] border-t border-[#E5E5E5] px-4 py-2 text-[10px] font-mono font-bold text-[#525252] flex justify-between">
                  <span>DISIPLIN // {cat.key}</span>
                  <span className="text-[#EF4444]">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
