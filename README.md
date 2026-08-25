# Next.js 16 Feature-First Frontend Portfolio

Modern, high-performance developer portfolio website dibangun menggunakan **Next.js 16 (App Router)**, **React 19**, **TypeScript 5**, **Tailwind CSS v4**, dan **Feature-First Modular Architecture**.

---

## 🚀 Fitur Utama

- **Next.js 16 App Router & React 19**: Rendering ultra-cepat dengan server components dan optimasi modern.
- **Tailwind CSS v4 & Obsidian Design System**: Skema warna Dark Obsidian Slate dengan aksen Electric Cyan, Neon Mint, dan glassmorphism.
- **Feature-First Architecture**: Struktur modular terisolasi dengan penegakan boundaries menggunakan `eslint-plugin-boundaries`.
- **Pure Frontend Architecture**: Ramping tanpa dependensi backend yang tidak perlu (zero bloat, zero heavy auth runtime).
- **Responsive & Accessible**: Desain responsif dari mobile hingga desktop lebar dengan standar aksesibilitas WCAG AA.
- **Testing & Quality Tooling**: Vitest, React Testing Library, ESLint 9, Prettier, Husky, dan Lint-Staged.

---

## 📂 Struktur Folder

```text
src/
├── app/          # Next.js App Router (Layout, Page, Global CSS)
├── core/         # Core providers, API client, environment validation
├── features/     # Feature modules (portfolio: components, data, index)
│   └── portfolio/
│       ├── components/   # Navbar, HeroSection, ProjectsSection, SkillsSection, ExperienceSection, ContactSection, Footer
│       ├── data/         # Data statis portofolio
│       └── index.ts      # Public API module
├── shared/       # Reusable UI primitives (Button, Card, Dialog, Input, Label), constants, utils
└── test/         # Setup test (Vitest & MSW)
```

---

## 🛠️ Quick Start

### 1. Instal Dependensi
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser.

### 3. Testing & Linter
```bash
npm run lint
npm run test
npm run build
```
