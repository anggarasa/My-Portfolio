export type ProjectCategory = "ALL" | "WEB" | "MOBILE";

export interface ProjectArchitecture {
  client: string;
  server?: string;
  database?: string;
  deployment?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "WEB" | "MOBILE";
  categoryLabel: string;
  year: string;
  overview: string;
  challenges: string[];
  keyFeatures: string[];
  technologies: string[];
  architecture: ProjectArchitecture;
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE & TOOLS";
  level: "PROFICIENT" | "ADVANCED" | "FAMILIAR";
  description: string;
  tags: string[];
}

export interface ExperienceTimeline {
  year: string;
  title: string;
  organization: string;
  type: "EDUCATION" | "PROJECT" | "WORK";
  description: string;
  bullets: string[];
}

export interface NavItem {
  label: string;
  href: string;
  tag?: string;
}
