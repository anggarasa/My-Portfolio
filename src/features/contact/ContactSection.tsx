"use client";

import * as React from "react";
import { PROFILE } from "@/shared/constants/profile";
import { Button } from "@/shared/components/ui/Button";
import { Input, Textarea } from "@/shared/components/ui/Input";
import { Label } from "@/shared/components/ui/Label";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/shared/components/ui/BrandIcons";

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi.";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!formData.message.trim()) newErrors.message = "Pesan tidak boleh kosong.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate immediate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="w-full bg-[#FAFAFA] py-16 sm:py-20 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b-2 border-[#0A0A0A] pb-6 mb-12">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#EF4444] font-mono">
              SALURAN DISPATCH // SEKSI 05
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#0A0A0A] uppercase">
            HUBUNGI SAYA
          </h2>
          <p className="text-sm sm:text-base text-[#525252] mt-2 max-w-2xl font-body">
            Terbuka untuk diskusi proyek rekayasa software (Fullstack Web & Mobile), tawaran
            kolaborasi, maupun peluang kerja profesional.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-[#0A0A0A] bg-[#FAFAFA] p-6 space-y-6">
              <div className="border-b-2 border-[#0A0A0A] pb-3 flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-wider text-[#0A0A0A]">
                  SALURAN KOMUNIKASI LANGSUNG
                </span>
                <span className="text-xs font-mono text-[#16A34A] font-bold">● AKTIF</span>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-start space-x-3 p-3 bg-[#F5F5F5] border border-[#D4D4D4] hover:border-[#0A0A0A] transition-colors group"
                >
                  <Mail className="h-5 w-5 text-[#EF4444] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block font-mono">
                      EMAIL UTAMA
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0A0A0A] group-hover:text-[#EF4444] font-mono">
                      {PROFILE.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 bg-[#F5F5F5] border border-[#D4D4D4] hover:border-[#0A0A0A] transition-colors group"
                >
                  <Phone className="h-5 w-5 text-[#EF4444] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block font-mono">
                      WHATSAPP & TELEPON
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0A0A0A] group-hover:text-[#EF4444] font-mono">
                      +62 858-6123-5561
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start space-x-3 p-3 bg-[#F5F5F5] border border-[#D4D4D4]">
                  <MapPin className="h-5 w-5 text-[#EF4444] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block font-mono">
                      DOMISILI / BASE OF OPERATIONS
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0A0A0A] font-body">
                      {PROFILE.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t-2 border-[#0A0A0A]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#525252] block mb-3 font-mono">
                  PROFIL REPOSITORI & JEJARING
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-bold font-mono uppercase hover:bg-[#EF4444] transition-colors"
                  >
                    <div className="flex items-center space-x-1.5">
                      <GithubIcon className="h-3.5 w-3.5 text-[#FAFAFA]" />
                      <span>GITHUB</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-[#0A0A0A] text-[#FAFAFA] text-xs font-bold font-mono uppercase hover:bg-[#EF4444] transition-colors"
                  >
                    <div className="flex items-center space-x-1.5">
                      <LinkedinIcon className="h-3.5 w-3.5 text-[#FAFAFA]" />
                      <span>LINKEDIN</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="border-2 border-[#0A0A0A] bg-[#FAFAFA] p-6 sm:p-8">
              <div className="border-b-2 border-[#0A0A0A] pb-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#EF4444] font-mono block">
                  FORMULIR REDAKSI
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A0A0A]">
                  Kirim Pesan atau Inquiry Proyek
                </h3>
              </div>

              {submitted ? (
                <div className="border-2 border-[#16A34A] bg-[#F0FDF4] p-6 text-center space-y-4">
                  <CheckCircle2 className="h-10 w-10 text-[#16A34A] mx-auto" />
                  <h4 className="font-display text-xl text-[#0A0A0A]">PESAN BERHASIL TERKIRIM</h4>
                  <p className="text-xs sm:text-sm text-[#525252] max-w-md mx-auto">
                    Terima kasih telah menghubungi. Saya akan meninjau pesan Anda dan membalas
                    secepat mungkin melalui email yang Anda cantumkan.
                  </p>
                  <Button variant="primary" size="sm" onClick={() => setSubmitted(false)}>
                    KIRIM PESAN LAIN
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" requiredIndicator>
                        NAMA LENGKAP / INSTITUSI
                      </Label>
                      <Input
                        id="name"
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={Boolean(errors.name)}
                      />
                      {errors.name && (
                        <span className="text-xs text-[#EF4444] mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" requiredIndicator>
                        ALAMAT EMAIL RESMI
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="nama@perusahaan.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={Boolean(errors.email)}
                      />
                      {errors.email && (
                        <span className="text-xs text-[#EF4444] mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">SUBJEK / TOPIK DISKUSI</Label>
                    <Input
                      id="subject"
                      placeholder="Contoh: Pengembangan Sistem Web POS / Tawaran Pekerjaan"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" requiredIndicator>
                      PESAN ATAU SPESIFIKASI PROYEK
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Jelaskan kebutuhan, gambaran proyek, atau pertanyaan Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      error={Boolean(errors.message)}
                    />
                    {errors.message && (
                      <span className="text-xs text-[#EF4444] mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-sm"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    <span>{isSubmitting ? "MENGIRIMKAN..." : "KIRIM PESAN SEKARANG"}</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
