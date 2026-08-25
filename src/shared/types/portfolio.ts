export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category?: string;
  year?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
