"use client";

import * as React from "react";
import { PROJECTS } from "@/shared/constants/projects";
import { Project, ProjectCategory } from "@/types";
import { FilterChip } from "@/shared/components/ui/Chip";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/shared/components/ui/Card";
import { Button } from "@/shared/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/Dialog";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<ProjectCategory>("ALL");
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "ALL") return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      className="w-full border-b-2 border-[#0A0A0A] bg-[#FAFAFA] py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#EF4444] font-mono">
                KATALOG KARYA // SEKSI 02
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0A0A0A] uppercase">
              PROYEK TERVERIFIKASI
            </h2>
            <p className="text-sm sm:text-base text-[#525252] mt-2 max-w-2xl font-body">
              Koleksi sistem perangkat lunak yang dirancang dan dibangun untuk menyelesaikan problem
              operasional nyata di sektor enterprise, pemerintahan, dan e-commerce.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <FilterChip
              selected={selectedCategory === "ALL"}
              onClick={() => setSelectedCategory("ALL")}
            >
              SEMUA ({PROJECTS.length})
            </FilterChip>
            <FilterChip
              selected={selectedCategory === "WEB"}
              onClick={() => setSelectedCategory("WEB")}
            >
              WEB APP ({PROJECTS.filter((p) => p.category === "WEB").length})
            </FilterChip>
            <FilterChip
              selected={selectedCategory === "MOBILE"}
              onClick={() => setSelectedCategory("MOBILE")}
            >
              MOBILE APP ({PROJECTS.filter((p) => p.category === "MOBILE").length})
            </FilterChip>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="elevated"
              className="flex flex-col justify-between group gsap-card-stagger"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#EF4444] font-mono">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#525252]">
                      {project.year}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-[#EF4444] transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0A0A0A] font-body mt-1">
                    {project.tagline}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-[#525252] font-body leading-relaxed line-clamp-4">
                    {project.overview}
                  </p>

                  {/* Highlights Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#E5E5E5]">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="bg-[#F5F5F5] p-2 border border-[#E5E5E5]">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#525252] block font-mono">
                            {m.label}
                          </span>
                          <span className="text-xs font-bold text-[#0A0A0A] font-body">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#F5F5F5] text-[#0A0A0A] border border-[#D4D4D4] text-[10px] font-mono font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#525252]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="flex items-center justify-between">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveProject(project)}
                  className="w-full text-xs"
                >
                  <span>BEDAH SPESIFIKASI</span>
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal / Dialog */}
      <Dialog
        open={Boolean(activeProject)}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      >
        {activeProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <div className="flex items-center space-x-2">
                <span className="bg-[#EF4444] text-[#FAFAFA] px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider">
                  {activeProject.categoryLabel}
                </span>
                <span className="text-xs font-mono text-[#525252] font-bold">
                  PERIODE: {activeProject.year}
                </span>
              </div>
              <DialogTitle>{activeProject.title}</DialogTitle>
              <DialogDescription className="text-sm font-bold text-[#0A0A0A] uppercase tracking-wider">
                {activeProject.tagline}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-2 font-body text-[#0A0A0A]">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#EF4444] mb-2 font-mono">
                  RINGKASAN SISTEM
                </h4>
                <p className="text-sm leading-relaxed text-[#525252]">{activeProject.overview}</p>
              </div>

              {/* Architecture Breakdown */}
              <div className="border-2 border-[#0A0A0A] bg-[#F5F5F5] p-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#0A0A0A] font-display flex items-center">
                  <Layers className="h-4 w-4 mr-1.5 text-[#EF4444]" />
                  ARSITEKTUR & IMPLEMENTASI TEKNIS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="border border-[#D4D4D4] bg-[#FAFAFA] p-2.5">
                    <span className="font-bold text-[#0A0A0A] block mb-1 font-mono uppercase text-[10px]">
                      Client Layer:
                    </span>
                    <span className="text-[#525252]">{activeProject.architecture.client}</span>
                  </div>
                  {activeProject.architecture.server && (
                    <div className="border border-[#D4D4D4] bg-[#FAFAFA] p-2.5">
                      <span className="font-bold text-[#0A0A0A] block mb-1 font-mono uppercase text-[10px]">
                        Server / API Layer:
                      </span>
                      <span className="text-[#525252]">{activeProject.architecture.server}</span>
                    </div>
                  )}
                  {activeProject.architecture.database && (
                    <div className="border border-[#D4D4D4] bg-[#FAFAFA] p-2.5">
                      <span className="font-bold text-[#0A0A0A] block mb-1 font-mono uppercase text-[10px]">
                        Database & Storage:
                      </span>
                      <span className="text-[#525252]">{activeProject.architecture.database}</span>
                    </div>
                  )}
                  {activeProject.architecture.deployment && (
                    <div className="border border-[#D4D4D4] bg-[#FAFAFA] p-2.5">
                      <span className="font-bold text-[#0A0A0A] block mb-1 font-mono uppercase text-[10px]">
                        Deployment & Ops:
                      </span>
                      <span className="text-[#525252]">
                        {activeProject.architecture.deployment}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Features & Challenges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#0A0A0A] mb-2 font-mono">
                    FITUR UTAMA
                  </h4>
                  <ul className="space-y-2 text-xs text-[#525252]">
                    {activeProject.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-[#16A34A] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#EF4444] mb-2 font-mono">
                    TANTANGAN & SOLUSI
                  </h4>
                  <ul className="space-y-2 text-xs text-[#525252]">
                    {activeProject.challenges.map((ch, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#EF4444] font-bold mr-2">›</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full Tech Stack Pills */}
              <div className="pt-3 border-t-2 border-[#E5E5E5]">
                <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#525252] mb-2 font-mono">
                  TECH STACK DIGUNAKAN
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-mono font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
