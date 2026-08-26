import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-[0.06em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-35 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0A0A0A] text-[#FAFAFA] border-2 border-[#0A0A0A] hover:bg-[#EF4444] hover:border-[#EF4444] active:bg-[#DC2626] active:border-[#DC2626]",
        secondary:
          "bg-transparent text-[#0A0A0A] border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FAFAFA] active:bg-[#262626]",
        ghost: "bg-transparent text-[#0A0A0A] border-0 hover:text-[#EF4444] active:text-[#DC2626]",
        destructive:
          "bg-[#EF4444] text-[#FAFAFA] border-2 border-[#EF4444] hover:bg-[#DC2626] hover:border-[#DC2626] active:bg-[#B91C1C] active:border-[#B91C1C]",
        outline:
          "bg-transparent text-[#0A0A0A] border-2 border-[#D4D4D4] hover:border-[#0A0A0A] hover:text-[#0A0A0A]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
