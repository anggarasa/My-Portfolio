import * as React from "react";
import { cn } from "@/shared/utils/cn";

export interface PullQuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  author?: string;
  role?: string;
}

export function PullQuote({ author, role, className, children, ...props }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-l-[#EF4444] pl-6 py-2 my-6 bg-[#F5F5F5] font-body",
        className,
      )}
      {...props}
    >
      <p className="text-lg sm:text-xl italic text-[#0A0A0A] leading-relaxed font-normal">
        &ldquo;{children}&rdquo;
      </p>
      {(author || role) && (
        <footer className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#525252] not-italic font-body">
          {author && <span className="text-[#0A0A0A]">{author}</span>}
          {author && role && <span className="mx-2 text-[#EF4444]">—</span>}
          {role && <span>{role}</span>}
        </footer>
      )}
    </blockquote>
  );
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "accent";
}

export function Badge({ variant = "outline", className, children, ...props }: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#0A0A0A] text-[#FAFAFA] border-2 border-[#0A0A0A]",
    secondary: "bg-[#F5F5F5] text-[#0A0A0A] border-2 border-[#E5E5E5]",
    outline: "bg-transparent text-[#0A0A0A] border-2 border-[#0A0A0A]",
    accent: "bg-[#EF4444] text-[#FAFAFA] border-2 border-[#EF4444]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] font-body select-none",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
