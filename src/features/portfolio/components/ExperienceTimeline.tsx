"use client";

import React, { useEffect, useRef } from "react";
import { EXPERIENCES, EDUCATION_HISTORY } from "../data/portfolioData";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Timeline items stagger reveal
      const cards = sectionRef.current?.querySelectorAll(".timeline-card");
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Growing glow line animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 0.5,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 border-t border-border relative">
      {/* Dynamic Background Scroll Progress Line */}
      <div className="hidden lg:block absolute left-8 top-36 bottom-36 w-0.5 bg-border -z-10 origin-top">
        <div
          ref={lineRef}
          className="w-full h-full bg-gradient-to-b from-primary via-primary/80 to-transparent origin-top shadow-[0_0_12px_rgba(225,220,201,0.5)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span>(Experience & Education //)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Career Journey & Education
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Rekam jejak profesional dalam pengembangan sistem web end-to-end dan aplikasi mobile interaktif.
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-wider pb-2 border-b border-border">
            <Briefcase className="w-4 h-4" />
            <span>Pengalaman Profesional</span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="timeline-card p-6 sm:p-8 rounded-xl bg-card border border-border glow-card transition-all duration-300 hover:border-primary/40 space-y-4"
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

        {/* Education Section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-wider pb-2 border-b border-border">
            <GraduationCap className="w-4 h-4" />
            <span>Pendidikan Formal & Kompetensi</span>
          </div>

          <div className="space-y-6">
            {EDUCATION_HISTORY.map((edu) => (
              <div
                key={edu.id}
                className="timeline-card p-6 sm:p-8 rounded-xl bg-card border border-border glow-card transition-all duration-300 hover:border-primary/40 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono text-primary font-semibold">
                      <span>{edu.major}</span>
                      {edu.location && (
                        <span className="text-muted-foreground flex items-center gap-1">
                          · <MapPin className="w-3 h-3" /> {edu.location}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-foreground self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Kompetensi Kejuruan & Praktik:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.competencies.map((comp) => (
                      <span
                        key={comp}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-foreground border border-border"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
