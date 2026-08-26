"use client";

import * as React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/shared/constants/navigation";
import { PROFILE } from "@/shared/constants/profile";
import { Button } from "@/shared/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "skills", "about", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAFA]/95 backdrop-blur-md border-b-2 border-[#0A0A0A]">
      {/* Top Gazette Announcement Bar */}
      <div className="bg-[#0A0A0A] text-[#FAFAFA] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.12em] flex items-center justify-between font-body border-b border-[#0A0A0A]">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 bg-[#EF4444] animate-pulse" />
          <span>{PROFILE.edition}</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <span className="text-[#A3A3A3]">STATUS:</span>
          <span className="text-[#FAFAFA]">{PROFILE.status}</span>
        </div>
        <div className="text-[#A3A3A3] text-[10px] hidden md:block">
          LOCATION: SUBANG, WEST JAVA (ID)
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#hero" className="group flex flex-col focus-visible:outline-none">
          <span className="font-display text-xl sm:text-2xl font-normal tracking-tight text-[#0A0A0A] group-hover:text-[#EF4444] transition-colors leading-none">
            ANGGARA SAPUTRA
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#525252] mt-1 font-body">
            FULLSTACK WEB & MOBILE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] transition-colors font-body ${
                  isActive
                    ? "text-[#0A0A0A] border-b-3 border-b-[#EF4444]"
                    : "text-[#525252] hover:text-[#0A0A0A] hover:border-b-3 hover:border-b-[#0A0A0A]"
                }`}
              >
                <span className="text-[9px] text-[#A3A3A3] mr-1 font-mono">{item.tag}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <a href={PROFILE.cvUrl} target="_blank" rel="noopener noreferrer" download>
            <Button variant="primary" size="sm" className="text-xs">
              <span>UNDUH CV</span>
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-[#0A0A0A] bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#0A0A0A] bg-[#FAFAFA] p-4 flex flex-col space-y-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 text-sm font-bold uppercase tracking-wider border-b border-[#E5E5E5] text-[#0A0A0A] hover:bg-[#F5F5F5] font-body"
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-[#EF4444]">{item.tag}</span>
            </Link>
          ))}
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full"
            >
              <Button variant="primary" size="default" className="w-full">
                UNDUH CV (PDF)
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
