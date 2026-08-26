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
    year: "2024 - 2025",
    title: "Lead Fullstack Developer — Proyek Kopdes (ERP & POS)",
    organization: "Proyek Sistem Enterprise Koperasi",
    type: "PROJECT",
    description:
      "Merancang dan membangun sistem point of sale dan enterprise resource planning berbasis web dari nol hingga tahap uji coba operasional.",
    bullets: [
      "Mengembangkan backend RESTful API Node.js/Express terintegrasi database PostgreSQL.",
      "Membangun antarmuka kasir cepat dan dasbor analitik laporan laba-rugi di ReactJS.",
      "Menerapkan sistem kontrol hak akses berbasis peran (RBAC) dan audit log transaksi.",
    ],
  },
  {
    year: "2024",
    title: "Mobile App Developer — Smartdigi & E-Rapet",
    organization: "Proyek Inovasi Aplikasi Publik & Komersial",
    type: "PROJECT",
    description:
      "Mengembangkan antarmuka aplikasi mobile Flutter untuk layanan aspirasi publik daerah dan aplikasi toko online hewan peliharaan.",
    bullets: [
      "Merancang UI responsif 60fps dengan kepatuhan terhadap pedoman desain Android modern.",
      "Mengintegrasikan REST API dinas daerah dan modul katalog produk e-commerce.",
      "Menerapkan state management terstruktur dan sistem penyimpanan lokal offline-first.",
    ],
  },
];
