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
    year: "2025",
    title: "Kelulusan Rekayasa Perangkat Lunak (RPL)",
    organization: "SMK Al-Intisab Patokbeusi",
    type: "EDUCATION",
    description:
      "Menyelesaikan pendidikan kejuruan formal dengan fokus mendalam pada algoritma pemrograman, rekayasa web, database relasional, dan aplikasi mobile.",
    bullets: [
      "Fokus spesialisasi: Fullstack Web Development & Mobile Engineering.",
      "Mengerjakan serangkaian proyek aplikasi riil berbasis tim dan individu.",
      "Menguasai standar industri dalam version control Git dan clean coding.",
    ],
  },
  {
    year: "2026",
    title: "Lead Web Developer — Diehard Escape (Arena Uji Nyali)",
    organization: "Platform Reservasi & Showcase Teater Horor Bogor",
    type: "PROJECT",
    description:
      "Merancang dan mengembangkan platform web interaktif untuk reservasi tiket, katalog film teater, serta sistem informasi wahana di diehardescape.com.",
    bullets: [
      "Membangun antarmuka Next.js modern, responsif, dan berperforma tinggi dengan tema horor sinematik.",
      "Mengimplementasikan katalog wahana berfilter dan alur registrasi pengunjung.",
      "Mengintegrasikan alur customer care langsung via WhatsApp dan panduan keselamatan medis.",
    ],
  },
  {
    year: "2025 - 2026",
    title: "Fullstack & Mobile Developer — Smartdigi & YM Wedding Studio",
    organization: "Aplikasi Publik Daerah & Platform Web Editorial",
    type: "PROJECT",
    description:
      "Mengembangkan aplikasi mobile Flutter untuk layanan aspirasi publik daerah Kab. Subang serta platform web editorial kurasi paket pernikahan di ymwedding.id.",
    bullets: [
      "Membangun UI Flutter 60fps dengan kepatuhan standar aksesibilitas publik.",
      "Mengembangkan website editorial pernikahan modern dengan integrasi katalog paket bertingkat.",
      "Menerapkan SEO terstruktur, lazy loading media, dan alur booking konsultasi instan.",
    ],
  },
];
