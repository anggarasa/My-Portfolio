"use client";

import * as React from "react";
import { TIMELINE } from "@/shared/constants/skills";
import { PullQuote } from "@/shared/components/ui/PullQuote";
import { GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full border-b-2 border-[#0A0A0A] bg-[#FAFAFA] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#EF4444] font-mono">
              OP-ED EDITORIAL // SEKSI 04
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0A0A0A] uppercase">
            FILOSOFI & PERJALANAN
          </h2>
          <p className="text-sm sm:text-base text-[#525252] mt-2 max-w-2xl font-body">
            Pandangan teknis mengenai rekayasa perangkat lunak dan dedikasi membangun sistem yang
            bernilai guna tinggi.
          </p>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Longform Editorial Article */}
          <div className="lg:col-span-7 space-y-6 font-body text-[#0A0A0A]">
            <div className="border-b border-[#E5E5E5] pb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#525252] font-mono block mb-1">
                KOLOM OPINI TEKNOLOGI
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#0A0A0A] leading-tight">
                Rekayasa Bukan Sekadar Kode, Tapi Solusi Berkelanjutan.
              </h3>
              <div className="flex items-center space-x-3 text-xs text-[#525252] mt-2 font-mono">
                <span>OLEH: ANGGARA SAPUTRA</span>
                <span>•</span>
                <span>SUBANG, JAWA BARAT</span>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#0A0A0A]">
              Sebagai pengembang yang fokus pada ekosistem <strong>Web dan Mobile</strong>, saya
              memandang setiap baris kode sebagai fondasi dari operasional sebuah bisnis atau
              institusi. Dari membangun sistem POS dan ERP Koperasi yang mengelola kalkulasi ribuan
              transaksi per hari, hingga merancang aplikasi mobile pelayanan publik daerah, prinsip
              utama saya tetap satu:{" "}
              <em>
                arsitektur yang kokoh, kode yang teruji, dan antarmuka yang tidak membingungkan
                pengguna.
              </em>
            </p>

            <PullQuote author="Anggara Saputra" role="Fullstack Developer">
              Kesederhanaan dalam arsitektur adalah bentuk tertinggi dari keanggunan teknis. Sistem
              yang hebat adalah sistem yang mudah dipahami rekan setim dan tidak tumbang saat beban
              puncak.
            </PullQuote>

            <p className="text-sm sm:text-base leading-relaxed text-[#525252]">
              Latar belakang kejuruan formal di{" "}
              <strong>SMK Al-Intisab Patokbeusi (RPL 2025)</strong> memberi saya pondasi logika
              algoritma, database relasional, dan etika kerja perangkat lunak yang terstruktur.
              Pengalaman tersebut saya tempa lebih jauh melalui proyek-proyek riil yang mengharuskan
              manajemen database ACID (PostgreSQL), integrasi API RESTful yang aman, serta
              perancangan antarmuka responsif di Flutter dan React.
            </p>

            {/* Principles Box */}
            <div className="border-2 border-[#0A0A0A] bg-[#F5F5F5] p-6 mt-8 space-y-4">
              <h4 className="font-display text-sm uppercase tracking-wider text-[#0A0A0A]">
                4 PILAR REKAYASA KODE SAYA
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-[#EF4444] text-[#FAFAFA] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-[#0A0A0A] block">Type-Safety & Prediktabilitas</strong>
                    <span className="text-[#525252]">
                      Mencegah runtime bug melalui kontrak tipe data TypeScript & Dart.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-[#0A0A0A] block">Pemisahan Layer Bersih</strong>
                    <span className="text-[#525252]">
                      Controller, service, dan repository tidak saling bercampur.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-[#0A0A0A] block">Integritas Data Relasional</strong>
                    <span className="text-[#525252]">
                      Transaksi database atomik untuk keamanan finansial & inventori.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-[#EF4444] text-[#FAFAFA] flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong className="text-[#0A0A0A] block">Desain Berbasis Token</strong>
                    <span className="text-[#525252]">
                      Zero hardcode styling demi konsistensi visual jangka panjang.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Timeline & Education Dossier */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-2 border-[#0A0A0A] bg-[#FAFAFA] p-6">
              <div className="border-b-2 border-[#0A0A0A] pb-3 mb-6 flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-wider text-[#0A0A0A] flex items-center">
                  <GraduationCap className="h-4 w-4 mr-2 text-[#EF4444]" />
                  LINIMASA REKAM JEJAK
                </span>
                <span className="font-mono text-[10px] text-[#525252] font-bold">
                  2024 - SEKARANG
                </span>
              </div>

              {/* Timeline Items */}
              <div className="space-y-6">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-[#0A0A0A] pl-4 relative space-y-1.5">
                    {/* Marker Dot */}
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-[#EF4444]" />

                    <div className="flex items-center space-x-2">
                      <span className="bg-[#0A0A0A] text-[#FAFAFA] text-[10px] font-mono font-bold px-2 py-0.5">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF4444] font-mono">
                        {item.type}
                      </span>
                    </div>

                    <h4 className="font-display text-base text-[#0A0A0A]">{item.title}</h4>

                    <div className="text-xs font-bold text-[#525252] uppercase font-body">
                      {item.organization}
                    </div>

                    <p className="text-xs text-[#525252] leading-relaxed font-body">
                      {item.description}
                    </p>

                    <ul className="space-y-1 pt-1 text-[11px] text-[#0A0A0A]">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start">
                          <span className="text-[#EF4444] font-bold mr-1.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
