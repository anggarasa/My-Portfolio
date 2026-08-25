import React from "react";
import { EXPERIENCES } from "../data/portfolioData";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span>(Experience //)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Career History & Milestones
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Proven track record in high-velocity tech teams and enterprise architecture projects.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-xl bg-card border border-border glow-card transition-all duration-300 hover:border-primary/40 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-primary font-semibold">
                    <span>{exp.company}</span>
                    {exp.location && (
                      <span className="text-muted-foreground flex items-center gap-1">
                        · <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-foreground self-start sm:self-auto">
                  <Calendar className="w-3 h-3 text-primary" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed pt-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-primary border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
