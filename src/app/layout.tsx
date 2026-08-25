import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/core/providers";
import { SmoothScrollProvider } from "@/shared/components/scroll/SmoothScrollProvider";
import { CustomCursor } from "@/shared/components/cursor/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anggara Saputra — Fullstack Developer (Web & Mobile)",
  description:
    "Portofolio profesional Anggara Saputra — Fullstack Developer berpengalaman dalam merancang dan mengembangkan sistem web end-to-end (Node.js, Express.js, ReactJS, Next.js) serta aplikasi mobile interaktif (Flutter).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        <SmoothScrollProvider>
          <CustomCursor />
          <Providers>{children}</Providers>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
