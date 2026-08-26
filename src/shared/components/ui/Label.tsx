import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/shared/utils/cn";

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    requiredIndicator?: boolean;
  }
>(({ className, requiredIndicator, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "block text-xs font-bold uppercase tracking-[0.06em] text-[#0A0A0A] mb-1.5 font-body select-none",
      className,
    )}
    {...props}
  >
    {children}
    {requiredIndicator && <span className="text-[#EF4444] ml-1">*</span>}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
