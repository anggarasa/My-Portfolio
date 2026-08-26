import * as React from "react";
import { cn } from "@/shared/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full bg-[#FAFAFA] px-3.5 py-2 text-sm text-[#0A0A0A] placeholder:text-[#A3A3A3] font-body",
          "border-2 transition-colors duration-150",
          error
            ? "border-[#EF4444] focus-visible:border-[#EF4444]"
            : "border-[#D4D4D4] focus-visible:border-[#0A0A0A]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
          "disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder:text-[#A3A3A3] font-body",
          "border-2 transition-colors duration-150",
          error
            ? "border-[#EF4444] focus-visible:border-[#EF4444]"
            : "border-[#D4D4D4] focus-visible:border-[#0A0A0A]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]",
          "disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
