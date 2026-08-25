"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FEATURED_PROJECTS } from "../data/portfolioData";
import { usePortfolioStore } from "../hooks/usePortfolioStore";
import { Project } from "@/shared/types/portfolio";
import { ArrowUpRight } from "lucide-react";

export function ProjectsList() {
  const [activeProject, setActiveProject] = useState<Project | null>(FEATURED_PROJECTS[0] || null);
  const [filter, setFilter] = useState<string>("all");
  const { setSelectedProject } = usePortfolioStore();

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (filter === "fullstack") {
      return (
        proj.category?.toLowerCase().includes("fullstack") ||
        proj.category?.toLowerCase().includes("erp")
      );
    }
    if (filter === "mobile") {
      return (
        proj.category?.toLowerCase().includes("mobile") ||
        proj.category?.toLowerCase().includes("flutter")
      );
    }
    if (filter === "govtech") {
      return (
        proj.category?.toLowerCase().includes("govtech") ||
        proj.category?.toLowerCase().includes("e-commerce")
      );
    }
    return true;
  });

  return (
    <section id="works" className="py-24 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span>(Selected Works //)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Proyek Nyata & Studi Kasus
            </h2>
          </div>

          {/* Filter Capsules */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              { id: "all", label: "Semua Proyek" },
              { id: "fullstack", label: "Fullstack Web & ERP" },
              { id: "mobile", label: "Mobile Apps (Flutter)" },
              { id: "govtech", label: "GovTech & E-Commerce" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full border transition-all ${
                  filter === tab.id
                    ? "bg-primary text-primary-foreground border-primary font-semibold"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase: Interactive List on Left + Floating Dynamic Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Numbered Interactive List (Benjamin Style) */}
          <div className="lg:col-span-7 divide-y divide-border border-y border-border">
            {filteredProjects.map((project, index) => {
              const formattedNumber = `(${String(index + 1).padStart(2, "0")})`;
              const isActive = activeProject?.id === project.id;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setActiveProject(project)}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative flex items-center justify-between py-6 px-3 sm:px-4 cursor-pointer transition-all duration-300 ${
                    isActive ? "bg-card/70" : "hover:bg-card/30"
                  }`}
                >
                  {/* Left: Number + Title + Active Dot */}
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                      {formattedNumber}
                    </span>

                    <div className="flex items-center gap-2.5">
                      {/* Active Glowing Dot */}
                      <span
                        className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${
                          isActive ? "opacity-100 scale-100 shadow-sm shadow-primary" : "opacity-0 scale-0"
                        }`}
                      />
                      <h3
                        className={`text-lg sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                          isActive ? "text-primary translate-x-1" : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Year + Category + Arrow */}
                  <div className="flex items-center gap-3 sm:gap-6 shrink-0 font-mono text-xs text-muted-foreground">
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-secondary/80 text-[11px] border border-border">
                      {project.category || "Proyek"}
                    </span>
                    <span>{project.year || "2025 – 2026"}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground translate-x-1"
                          : "bg-secondary text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Floating Image Preview Container */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            {activeProject && (
              <div
                onClick={() => setSelectedProject(activeProject)}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card glow-card cursor-pointer transition-all duration-500 hover:border-primary/40"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-background overflow-hidden">
                  {activeProject.image ? (
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="500px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono text-xs text-muted-foreground">
                      Preview Visual
                    </div>
                  )}
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-card/90 border border-border text-primary">
                      {activeProject.category}
                    </span>
                  </div>
                </div>

                {/* Card Caption */}
                <div className="p-6 space-y-3 bg-card border-t border-border">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {activeProject.title}
                    </h4>
                    <span className="text-xs font-mono text-muted-foreground">
                      / {activeProject.year} /
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {activeProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {activeProject.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-primary border border-border"
                      >
                        {t}
                      </span>
                    ))}
                    {activeProject.tags.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                        +{activeProject.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-primary font-semibold">
                    <span>Klik untuk melihat studi kasus & spesifikasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
