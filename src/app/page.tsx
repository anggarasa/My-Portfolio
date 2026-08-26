import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import { HeroSection } from "@/features/hero/HeroSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { SkillsSection } from "@/features/skills/SkillsSection";
import { AboutSection } from "@/features/about/AboutSection";
import { ContactSection } from "@/features/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
