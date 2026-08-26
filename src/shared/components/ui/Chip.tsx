import * as React from "react";
import { cn } from "@/shared/utils/cn";

export interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function FilterChip({ selected, className, children, ...props }: FilterChipProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center px-3.5 py-1 text-xs font-bold uppercase tracking-[0.04em] transition-all cursor-pointer select-none font-body",
        "border-2",
        selected
          ? "bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A]"
          : "bg-transparent text-[#525252] border-[#D4D4D4] hover:border-[#0A0A0A] hover:text-[#0A0A0A]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export interface StatusChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "error" | "info" | "neutral";
}

export function StatusChip({ variant = "info", className, children, ...props }: StatusChipProps) {
  const variantStyles = {
    success: "bg-[#F0FDF4] text-[#16A34A] border-2 border-[#16A34A]",
    warning: "bg-[#FEFCE8] text-[#CA8A04] border-2 border-[#CA8A04]",
    error: "bg-[#FEF2F2] text-[#EF4444] border-2 border-[#EF4444]",
    info: "bg-[#F5F5F5] text-[#0A0A0A] border-2 border-[#0A0A0A]",
    neutral: "bg-[#FAFAFA] text-[#525252] border-2 border-[#E5E5E5]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] font-body",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
