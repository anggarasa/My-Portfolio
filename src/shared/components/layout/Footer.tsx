"use client";

import * as React from "react";
import Link from "next/link";
import { PROFILE } from "@/shared/constants/profile";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/shared/components/ui/BrandIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0A0A0A] text-[#FAFAFA] border-t-4 border-t-[#EF4444] font-body mt-20">
      {/* Top Colophon Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 border-b-2 border-[#262626] pb-12">
          {/* Column 1: Big Typography Identity */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#EF4444] block mb-2 font-mono">
                EDITORIAL COLOPHON // VOL. 2026
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-none tracking-tight text-[#FAFAFA] mb-4">
                ANGGARA SAPUTRA
              </h2>
              <p className="text-sm sm:text-base text-[#A3A3A3] max-w-md leading-relaxed">
                Fullstack Web & Mobile Developer berbasis di Subang, Jawa Barat. Berkomitmen pada
                rekayasa kode yang modular, performa tinggi, dan pengalaman pengguna yang presisi.
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-3">
              <span className="inline-block w-2.5 h-2.5 bg-[#16A34A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#A3A3A3]">
                OPEN TO WORK // CONTRACT & FULL-TIME
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#FAFAFA] border-b-2 border-[#EF4444] pb-2 mb-4">
              INDIKS SEKSI
            </h3>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[#A3A3A3]">
              <li>
                <Link
                  href="#hero"
                  className="hover:text-[#EF4444] transition-colors flex items-center justify-between"
                >
                  <span>01 // BERANDA</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-[#EF4444] transition-colors flex items-center justify-between"
                >
                  <span>02 // PROYEK UTAMA</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="hover:text-[#EF4444] transition-colors flex items-center justify-between"
                >
                  <span>03 // ARSENAL SKILL</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#EF4444] transition-colors flex items-center justify-between"
                >
                  <span>04 // EDITORIAL OP-ED</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#EF4444] transition-colors flex items-center justify-between"
                >
                  <span>05 // HUBUNGI SAYA</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Channels & Connect */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#FAFAFA] border-b-2 border-[#EF4444] pb-2 mb-4">
                SALURAN RESMI
              </h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex items-center space-x-2 text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors group"
                  >
                    <Mail className="h-4 w-4 text-[#EF4444]" />
                    <span className="font-mono text-[11px] truncate group-hover:underline">
                      {PROFILE.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors group"
                  >
                    <Phone className="h-4 w-4 text-[#EF4444]" />
                    <span className="font-mono text-[11px] group-hover:underline">
                      +62 858-6123-5561
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors group"
                  >
                    <GithubIcon className="h-4 w-4 text-[#EF4444]" />
                    <span className="font-mono text-[11px] group-hover:underline">
                      github.com/anggarasa
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors group"
                  >
                    <LinkedinIcon className="h-4 w-4 text-[#EF4444]" />
                    <span className="font-mono text-[11px] group-hover:underline">
                      linkedin.com/in/anggara-saputra
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#262626]">
              <button
                type="button"
                onClick={scrollToTop}
                className="w-full flex items-center justify-between p-2.5 bg-[#171717] border-2 border-[#404040] hover:border-[#EF4444] hover:bg-[#262626] text-xs font-bold uppercase tracking-wider text-[#FAFAFA] transition-all cursor-pointer"
              >
                <span>KEMBALI KE ATAS</span>
                <ArrowUp className="h-4 w-4 text-[#EF4444]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 font-mono text-[11px]">
            <span>© {new Date().getFullYear()} ANGGARA SAPUTRA.</span>
            <span>SELURUH HAK CIPTA DILINDUNGI.</span>
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#A3A3A3]">
            SISTEM DESAIN <span className="text-[#EF4444] font-bold">VOICEBOX EDITORIAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
