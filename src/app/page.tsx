import React from "react";
import {
  Navbar,
  HeroSection,
  MarqueeBanner,
  ProjectsList,
  StatementAscii,
  SkillSets,
  ServicesCards,
  ExperienceTimeline,
  ProjectModal,
  ContactModal,
  ToastNotification,
  Footer,
} from "@/features/portfolio";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <MarqueeBanner />
        <ProjectsList />
        <StatementAscii />
        <SkillSets />
        <ServicesCards />
        <ExperienceTimeline />
      </main>

      {/* Swiss-Grid Footer & Bottom Callout */}
      <Footer />

      {/* Interactive Overlays & Modals */}
      <ProjectModal />
      <ContactModal />
      <ToastNotification />
    </div>
  );
}
