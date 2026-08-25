"use client";

import React from "react";
import Image from "next/image";
import { usePortfolioStore } from "../hooks/usePortfolioStore";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/shared/components/ui/Dialog";
import { GithubIcon } from "@/shared/components/ui/BrandIcons";
import { ExternalLink } from "lucide-react";

export function ProjectModal() {
  const { selectedProject, setSelectedProject } = usePortfolioStore();

  if (!selectedProject) return null;

  return (
    <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
      <DialogContent className="max-w-3xl bg-card border border-border text-foreground p-0 overflow-hidden shadow-2xl">
        {/* Header Preview Image */}
        {selectedProject.image && (
          <div className="relative w-full h-56 sm:h-72 bg-background border-b border-border">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            {/* Year / Category Badge */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-card/90 border border-border text-primary">
                {selectedProject.category || "Case Study"}
              </span>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-card/90 border border-border text-muted-foreground">
                / {selectedProject.year || "2026"} /
              </span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {selectedProject.title}
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {selectedProject.longDescription || selectedProject.description}
            </DialogDescription>
          </DialogHeader>

          {/* Metrics */}
          {selectedProject.metrics && selectedProject.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {selectedProject.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-background border border-border flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">
                    {metric.label}
                  </span>
                  <span className="text-lg font-bold font-mono text-primary mt-1">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Technologies & Frameworks
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-secondary text-primary border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
            <div className="flex gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary hover:bg-card text-foreground text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              )}
              {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-mono font-semibold transition-colors"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
