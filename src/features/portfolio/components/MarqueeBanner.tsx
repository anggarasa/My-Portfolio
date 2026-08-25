import React from "react";

interface MarqueeBannerProps {
  text?: string;
  speed?: "normal" | "fast";
  reverse?: boolean;
  className?: string;
}

export function MarqueeBanner({
  text = "ANGGARA SAPUTRA © SUBANG, INDONESIA · FULLSTACK WEB & MOBILE DEVELOPER · THREE.JS & GSAP · FLUTTER ARCHITECT · ",
  speed = "normal",
  reverse = false,
  className = "",
}: MarqueeBannerProps) {
  const animationClass = reverse
    ? "animate-marquee-reverse"
    : speed === "fast"
    ? "animate-marquee-fast"
    : "animate-marquee";

  return (
    <div className={`w-full overflow-hidden bg-card border-y border-border py-4 select-none ${className}`}>
      <div className={animationClass}>
        {/* Repeat content for seamless infinite marquee loop */}
        <div className="flex shrink-0 items-center whitespace-nowrap text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider font-mono text-primary pr-8">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
        <div
          className="flex shrink-0 items-center whitespace-nowrap text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wider font-mono text-primary pr-8"
          aria-hidden="true"
        >
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
