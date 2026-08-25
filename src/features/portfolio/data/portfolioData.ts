import { Project, Experience, Education, SocialLink } from "@/shared/types/portfolio";

export const PERSONAL_INFO = {
  name: "Anggara",
  fullName: "Anggara Saputra",
  role: "Fullstack Developer",
  tagline: "Merancang sistem web end-to-end & antarmuka mobile yang efisien, skalabel, dan berpusat pada pengguna.",
  bio: "Fullstack Developer dengan pengalaman profesional dalam membangun sistem web end-to-end (Node.js, Express.js, ReactJS, Next.js) dan antarmuka aplikasi mobile (Flutter). Memiliki rekam jejak dalam pengembangan sistem Point of Sale (POS), sistem ERP, aplikasi super app layanan pemerintah terintegrasi (GovTech), dan mobile e-commerce.",
  location: "Subang, Jawa Barat, Indonesia",
  locationShort: "SUBANG, IDN",
  countryCode: "IDN",
  workingScope: "INDONESIA & REMOTE",
  availability: "Tersedia untuk proyek baru & posisi Fullstack / Mobile",
  year: "2026",
  github: "https://github.com/anggarasa",
  linkedin: "https://linkedin.com/in/anggara-saputra-7baa95318",
  phone: "085861235561",
  email: "anggarasaputra273@gmail.com",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Proyek Kopdes — Website POS & Sistem ERP",
    description: "Sistem Point of Sale (POS) dan Enterprise Resource Planning (ERP) terintegrasi secara real-time untuk koperasi desa.",
    longDescription: "Mengembangkan sistem Point of Sale (POS) secara fullstack dengan backend Node.js & Express.js serta antarmuka ReactJS untuk mendukung transaksi penjualan kasir koperasi desa secara real-time. Merancang modul ERP mencakup manajemen stok inventaris, pencatatan keuangan, dan pelaporan otomatis, dilengkapi optimasi query database untuk menangani volume transaksi harian tinggi.",
    category: "Fullstack Web & ERP",
    year: "2025 – 2026",
    tags: ["Node.js", "Express.js", "ReactJS", "PostgreSQL", "MySQL", "RESTful API", "ERP & POS"],
    githubUrl: "https://github.com/anggarasa",
    demoUrl: "#",
    featured: true,
    image: "/projects/kopdes-pos-erp.svg",
    metrics: [
      { label: "Transaksi", value: "Real-time POS" },
      { label: "Modul ERP", value: "Stok, Keuangan, Laporan" },
      { label: "Performa", value: "Optimasi Query DB" },
    ],
  },
  {
    id: "proj-2",
    title: "Proyek Smartdigi — Super App Kab. Subang",
    description: "Antarmuka aplikasi mobile (Flutter) super app yang mengintegrasikan berbagai layanan publik Pemerintah Kabupaten Subang.",
    longDescription: "Berkontribusi dalam pengembangan aplikasi super (super app) Pemerintah Kabupaten Subang yang menyatukan beragam layanan masyarakat dalam satu platform digital. Membangun tampilan UI/UX menggunakan Flutter, komponen navigasi modular, dan integrasi mulus dengan REST API backend untuk menjamin antarmuka responsif dan ramah pengguna.",
    category: "Mobile App (Flutter) & GovTech",
    year: "2025",
    tags: ["Flutter", "Dart", "Mobile UI/UX", "REST API", "GovTech Super App", "Subang"],
    githubUrl: "https://github.com/anggarasa",
    demoUrl: "#",
    featured: true,
    image: "/projects/smartdigi-subang.svg",
    metrics: [
      { label: "Platform", value: "Cross-Platform Flutter" },
      { label: "Integrasi", value: "REST API Gateway" },
      { label: "Cakupan", value: "Multi-Layanan Publik" },
    ],
  },
  {
    id: "proj-3",
    title: "Proyek E-Rapet — Mobile Pet E-Commerce",
    description: "Antarmuka aplikasi mobile (Flutter) e-commerce interaktif untuk jual-beli produk kebutuhan hewan peliharaan.",
    longDescription: "Mengembangkan antarmuka aplikasi belanja mobile menggunakan Flutter yang mencakup halaman katalog produk interaktif, manajemen keranjang belanja (cart), dan alur checkout multi-tahap. Membangun sistem widget UI reusable, navigasi antar-halaman yang konsisten dengan API backend, serta pengujian & debugging performa UI.",
    category: "Mobile App (Flutter) & E-Commerce",
    year: "2025",
    tags: ["Flutter", "Dart", "E-Commerce", "UI/UX Components", "State Management", "Testing"],
    githubUrl: "https://github.com/anggarasa",
    demoUrl: "#",
    featured: true,
    image: "/projects/erapet-ecommerce.svg",
    metrics: [
      { label: "Fitur Kunci", value: "Katalog, Cart, Checkout" },
      { label: "Komponen", value: "Reusable Flutter UI" },
      { label: "UX Flow", value: "Smooth & Responsive" },
    ],
  },
];

export const SKILL_CAPABILITIES: { number: string; title: string; subtitle: string; description: string }[] = [
  {
    number: "01",
    title: "Fullstack Web Development",
    subtitle: "Node.js, Express.js & ReactJS / Next.js",
    description: "Membangun sistem web end-to-end yang tangguh dari layer backend RESTful API menggunakan Node.js/Express.js dan Laravel hingga antarmuka modern yang interaktif dengan ReactJS dan Next.js.",
  },
  {
    number: "02",
    title: "Mobile UI/UX Implementation",
    subtitle: "Flutter & Dart Cross-Platform",
    description: "Mengembangkan aplikasi mobile Android dan iOS dengan Flutter berkinerja 60fps, komponen widget yang reusable, navigasi antar-halaman mulus, dan integrasi API yang konsisten.",
  },
  {
    number: "03",
    title: "Database Architecture & Optimization",
    subtitle: "PostgreSQL, MySQL & Query Tuning",
    description: "Merancang skema database relasional yang terstruktur, integritas relasi tabel, serta melakukan optimasi query untuk menangani volume transaksi harian tinggi.",
  },
  {
    number: "04",
    title: "Enterprise Systems & ERP / POS",
    subtitle: "Stok Inventaris, Kasir & Keuangan",
    description: "Memahami dan mengimplementasikan modul bisnis kompleks seperti sistem Point of Sale (POS) kasir real-time, manajemen stok gudang, dan otomatisasi laporan keuangan.",
  },
  {
    number: "05",
    title: "Government & E-Commerce Solutions",
    subtitle: "Super Apps & Interactive Shopping",
    description: "Berpengalaman merancang antarmuka layanan publik terintegrasi tingkat pemerintah daerah (GovTech) serta alur transaksi belanja online yang ramah pengguna.",
  },
  {
    number: "06",
    title: "Agile, Git & Clean Collaboration",
    subtitle: "Version Control, Scrum & Problem Solving",
    description: "Terbiasa bekerja dalam tim kolaboratif lintas fungsi (backend, desainer UI/UX, stakeholders) menggunakan alur kerja Git, sprint Agile/Scrum, dan prinsip clean architecture.",
  },
];

export const SERVICES_LIST = [
  {
    id: "srv-1",
    tag: "/ 01 /",
    title: "Fullstack Web Engineering",
    description: "Pengembangan sistem web end-to-end berbasis ReactJS, Next.js, Node.js, Express.js, dan Laravel yang skalabel dan aman.",
    deliverables: [
      "Arsitektur Fullstack End-to-End",
      "Sistem POS & ERP Terintegrasi",
      "RESTful API Development",
      "Optimasi Database MySQL & PostgreSQL",
    ],
  },
  {
    id: "srv-2",
    tag: "/ 02 /",
    title: "Mobile App Development",
    description: "Pembuatan aplikasi mobile cross-platform (Android & iOS) berkinerja tinggi menggunakan Flutter dan Dart.",
    deliverables: [
      "Antarmuka Mobile Flutter Responsif",
      "Integrasi Endpoint REST API",
      "Katalog, Keranjang & Checkout",
      "Komponen UI Reusable & Modul Navigasi",
    ],
  },
  {
    id: "srv-3",
    tag: "/ 03 /",
    title: "API & Database Architecture",
    description: "Perancangan RESTful API terstandarisasi serta perancangan dan optimasi query database untuk performa maksimal.",
    deliverables: [
      "RESTful API Endpoints",
      "Skema Relasional Database",
      "Query Performance Optimization",
      "Data Integrity & Security",
    ],
  },
  {
    id: "srv-4",
    tag: "/ 04 /",
    title: "UI/UX Implementation & Slicing",
    description: "Konversi desain visual figma menjadi antarmuka web dan mobile yang presisi piksel dengan pengalaman pengguna prima.",
    deliverables: [
      "Pixel-Perfect UI Slicing",
      "Interaksi & Animasi Halus",
      "Responsive Web Design",
      "UI Debugging & Testing",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Fullstack Developer",
    company: "Pengembangan Solusi Web & Mobile",
    period: "2025 — Sekarang (1 Tahun)",
    location: "Subang, Jawa Barat",
    description: [
      "Mengembangkan sistem Point of Sale (POS) dan ERP Kopdes secara fullstack (Node.js, Express.js, ReactJS) untuk mendukung transaksi koperasi desa secara real-time.",
      "Merancang modul-modul ERP (stok, keuangan, pelaporan) serta melakukan optimasi query database untuk meningkatkan performa sistem.",
      "Membangun antarmuka mobile Flutter untuk Super App Smartdigi Pemkab Subang dan aplikasi e-commerce produk hewan peliharaan E-Rapet.",
      "Berkolaborasi aktif dalam tim menggunakan metodologi Agile/Scrum, version control Git, dan integrasi RESTful API.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "ReactJS",
      "Next.js",
      "Flutter",
      "Dart",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "REST API",
      "Git",
    ],
  },
];

export const EDUCATION_HISTORY: Education[] = [
  {
    id: "edu-1",
    institution: "SMK Al-Intisab Patokbeusi",
    major: "Rekayasa Perangkat Lunak (RPL)",
    degree: "Sekolah Menengah Kejuruan",
    period: "Lulus 2025",
    location: "Subang, Jawa Barat",
    competencies: [
      "Fullstack Web Development",
      "Mobile UI Development (Flutter)",
      "API Development",
      "Database Design",
      "Point of Sale (POS) System",
      "Enterprise Resource Planning (ERP)",
      "E-Commerce Application",
      "Government Integrated Application",
      "Version Control (Git)",
      "Problem Solving & Team Collaboration",
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/anggarasa", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/anggara-saputra-7baa95318", icon: "Linkedin" },
  { name: "WhatsApp", url: "https://wa.me/6285861235561", icon: "Phone" },
  { name: "Email", url: "mailto:anggarasaputra273@gmail.com", icon: "Mail" },
];
