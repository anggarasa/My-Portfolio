import { SkillItem, ExperienceTimeline } from "@/types";

export const SKILLS: SkillItem[] = [
  {
    name: "Node.js & Express.js",
    category: "BACKEND",
    level: "PROFICIENT",
    description:
      "Perancangan RESTful API, authentication middleware, rate limiting, dan arsitektur modular controller-service-repository.",
    tags: ["REST API", "JWT", "Middleware", "Microservices", "Scalability"],
  },
  {
    name: "Laravel & PHP",
    category: "BACKEND",
    level: "ADVANCED",
    description:
      "Pengembangan backend MVC, Eloquent ORM, migrasi database, relasi kompleks, dan integrasi API payment gateway.",
    tags: ["MVC", "Eloquent ORM", "Blade", "API Resources", "Security"],
  },
  {
    name: "PostgreSQL & MySQL",
    category: "DATABASE & TOOLS",
    level: "PROFICIENT",
    description:
      "Perancangan skema relasional, optimasi indexing, stored procedures, transaksi ACID, dan integritas data enterprise.",
    tags: ["Relational DB", "ACID", "Query Optimization", "Indexing", "Normalization"],
  },
  {
    name: "Flutter & Dart",
    category: "MOBILE",
    level: "PROFICIENT",
    description:
      "Pengembangan antarmuka mobile cross-platform (Android/iOS), clean state management, integrasi API, dan offline storage.",
    tags: ["Android & iOS", "Provider / BLoC", "Custom UI", "Dio HTTP", "Hive/SQLite"],
  },
  {
    name: "React.js & Next.js",
    category: "FRONTEND",
    level: "PROFICIENT",
    description:
      "Membangun Single Page & Server-Rendered Applications dengan App Router, Zustand, Tailwind CSS, dan tipe TypeScript ketat.",
    tags: ["React 19", "Next.js 16", "App Router", "Zustand", "Hooks"],
  },
  {
    name: "TypeScript & Modern JS",
    category: "FRONTEND",
    level: "PROFICIENT",
    description:
      "Penulisan kode type-safe, interface modeling, generics, async programming, dan modular ES6+ standards.",
    tags: ["Type-Safe", "Generics", "Async/Await", "ESNext", "Zod"],
  },
  {
    name: "Tailwind CSS & Design Systems",
    category: "FRONTEND",
    level: "PROFICIENT",
    description:
      "Implementasi desain token semantik, responsive breakpoints, layout CSS Grid/Flexbox, dan tema berkontras tinggi.",
    tags: ["VoiceBox Theme", "CSS Variables", "Responsive", "Zero-Hardcode", "Radix UI"],
  },
  {
    name: "DevOps & Developer Tooling",
    category: "DATABASE & TOOLS",
    level: "ADVANCED",
    description:
      "Workflow Git branch management, Linux server deployment, Nginx reverse proxy, Postman API testing, dan CI/CD dasar.",
    tags: ["Git & GitHub", "Linux CLI", "Nginx", "PM2", "Postman", "Vitest"],
  },
];

export const TIMELINE: ExperienceTimeline[] = [
  {
    year: "Mei 2025",
    title: "Kelulusan Rekayasa Perangkat Lunak (RPL)",
    organization: "SMK Al-Intisab Patokbeusi",
    type: "EDUCATION",
    description:
      "Menyelesaikan pendidikan formal kejuruan dengan spesialisasi Rekayasa Perangkat Lunak, memperdalam dasar algoritma pemrograman, rekayasa web & mobile, serta manajemen database relasional.",
    bullets: [
      "Fokus spesialisasi: Rekayasa Perangkat Lunak, Fullstack Web & Mobile Engineering.",
      "Pondasi logika algoritma, database relasional ACID, dan prinsip Clean Architecture.",
      "Penyelesaian kurikulum berbasis proyek kejuruan riil dan standar industri.",
    ],
  },
  {
    year: "Jun - Des 2025",
    title: "FullStack Engineer",
    organization: "PT Zen Multimedia Indonesia",
    type: "WORK",
    description:
      "Bertanggung jawab dalam perancangan dan pengembangan aplikasi web end-to-end, integrasi RESTful API, perancangan basis data relasional, dan optimalisasi kinerja platform multimedia klien.",
    bullets: [
      "Merancang arsitektur backend REST API yang scalable, modular, dan secure.",
      "Mengembangkan antarmuka frontend yang responsif, interaktif, dan optimal di berbagai perangkat.",
      "Kolaborasi tim dalam deployment server, optimasi query database, dan code review berkala.",
    ],
  },
  {
    year: "2026 - Sekarang",
    title: "Freelance Web & Mobile Developer",
    organization: "Independent Contractor / Digital Solutions",
    type: "WORK",
    description:
      "Menyediakan jasa konsultasi teknis, perancangan arsitektur, dan rekayasa solusi perangkat lunak mandiri untuk kebutuhan aplikasi web modern dan mobile lintas platform.",
    bullets: [
      "Membangun solusi web modern (Next.js, React, Node.js, Laravel) & mobile lintas platform (Flutter).",
      "Menyelesaikan proyek klien: sistem tiket Diehard Escape, super-app publik Smartdigi, dan web editorial YM Wedding Studio.",
      "Mengelola siklus SDLC mandiri dari perancangan arsitektur, testing, SEO, hingga cloud deployment.",
    ],
  },
];
