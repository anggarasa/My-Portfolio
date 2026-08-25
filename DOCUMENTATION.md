# Dokumentasi Teknis & Arsitektur

## Next.js 16 Feature-First Pure Frontend Portfolio

Dokumen ini menjelaskan arsitektur, konvensi kode, desain sistem, dan panduan pengembangan untuk proyek portofolio murni frontend ini.

---

## 📂 1. Arsitektur Feature-First (Modular)

Proyek ini menggunakan pendekatan **Feature-First Architecture**. Setiap domain fitur besar diisolasi ke dalam subdirektori sendiri di bawah `src/features/`.

### Struktur Modular dalam `src/features/[featureName]`
1. **`components/`**: Komponen React/UI spesifik fitur (contoh: `HeroSection`, `ProjectsSection`, `SkillsSection`, `ContactSection`, `Navbar`, `Footer`).
2. **`data/`**: Data statis, konfigurasi, atau mock data terkait fitur.
3. **`hooks/`**: Custom hooks (jika ada) untuk logika UI atau client-state.
4. **`store/`**: Local UI state management menggunakan Zustand (jika diperlukan).
5. **`index.ts` (Public API)**: Gerbang utama ekspor fitur. Hanya komponen/fungsi yang diekspor di sini yang dapat digunakan oleh halaman `src/app/`.

---

## 🚫 2. Aturan Impor & Batasan Modul (Boundaries)

Aturan pembatasan modul ditegakkan otomatis menggunakan `eslint-plugin-boundaries` di berkas `eslint.config.mjs`:

- **`app`** (`src/app/**`): Gerbang aplikasi (routing, layout, page). Dapat mengimpor `feature`, `core`, dan `shared`.
- **`feature`** (`src/features/*`): Modul bisnis terisolasi. Dapat mengimpor `shared` dan `core`, tetapi tidak boleh mengimpor langsung fitur lain.
- **`shared`** (`src/shared/**`): Komponen generik, utility pembantu (`cn.ts`), atau konstanta tanpa logika bisnis. Tidak boleh bergantung pada `feature`, `app`, atau `core`.
- **`core`** (`src/core/**`): Konfigurasi infrastruktur (API client, environment validation, global providers).

---

## 🎨 3. Design Tokens & Styling (Tailwind CSS v4)

- **Tema Utama**: Dark obsidian slate (`#090d16`) dengan aksen Electric Cyan (`#38bdf8`) dan Neon Mint (`#34d399`).
- **Glassmorphism**: `.glass-panel` dengan `backdrop-blur-md` dan border translucent halus.
- **Tipografi**: Geist Sans untuk konten umum dan Geist Mono untuk kode / badge teknis.

---

## 🚀 4. Perintah Pengembangan

- `npm run dev`: Menjalankan server pengembangan lokal di `http://localhost:3000`.
- `npm run build`: Membangun bundle produksi Next.js.
- `npm run lint`: Menjalankan verifikasi linter ESLint dan module boundaries.
- `npm run test`: Menjalankan unit test dengan Vitest.
