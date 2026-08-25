import React from "react";
import { SERVICES_LIST } from "../data/portfolioData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/ui/Card";
import { Check } from "lucide-react";

export function ServicesCards() {
  return (
    <section id="services" className="py-24 border-t border-border relative bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span>(Services)</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground flex items-center gap-3">
              <span>Engineering services</span>
              <span className="text-primary font-mono">*</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Delivering bespoke software solutions, enterprise web architectures, and high-impact digital experiences.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => (
            <Card
              key={service.id}
              className="bg-card border border-border glow-card flex flex-col justify-between p-6 rounded-xl hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader className="p-0 space-y-3">
                <span className="text-xs font-mono text-primary font-bold">
                  {service.tag}
                </span>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 pt-6 mt-6 border-t border-border/80 space-y-2.5">
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Key Deliverables
                </div>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-foreground">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
