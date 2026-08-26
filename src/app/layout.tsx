import type { Metadata, Viewport } from "next";
import { Archivo_Black, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ANGGARA SAPUTRA — Fullstack Web & Mobile Developer // VoiceBox Portfolio",
  description:
    "Edisi Portofolio Resmi Anggara Saputra — Fullstack Developer (Node.js, Express, React, Next.js, Flutter) dari Subang, Jawa Barat. Membangun sistem enterprise, aplikasi pemerintahan daerah, dan platform e-commerce dengan presisi tinggi.",
  keywords: [
    "Anggara Saputra",
    "Fullstack Developer",
    "Web Developer",
    "Mobile Developer",
    "Flutter",
    "Node.js",
    "React",
    "Next.js",
    "PostgreSQL",
    "Subang",
    "SMK Al-Intisab",
    "VoiceBox",
    "Portfolio",
  ],
  authors: [{ name: "Anggara Saputra" }],
  creator: "Anggara Saputra",
  openGraph: {
    title: "ANGGARA SAPUTRA — Fullstack Web & Mobile Developer",
    description:
      "Portofolio editorial resmi karya engineering Anggara Saputra: Proyek Kopdes POS/ERP, Smartdigi Super App Subang, dan E-Rapet Mobile Store.",
    type: "website",
    locale: "id_ID",
    siteName: "VoiceBox Portfolio — Anggara Saputra",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANGGARA SAPUTRA — Fullstack Developer",
    description:
      "Portofolio editorial resmi karya engineering Anggara Saputra: Proyek Kopdes POS/ERP, Smartdigi Super App Subang, dan E-Rapet Mobile Store.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${archivoBlack.variable} ${workSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
