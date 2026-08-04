import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

const indicatorVariants = cva("inline-block shrink-0 rounded-full ring-2 ring-background", {
  defaultVariants: { size: "default", variant: "neutral" },
  variants: {
    size: { sm: "size-1.5", default: "size-2", lg: "size-2.5" },
    variant: { neutral: "bg-muted-foreground", success: "bg-success", warning: "bg-warning", destructive: "bg-destructive", info: "bg-info" },
  },
});

export interface IndicatorProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof indicatorVariants> { label?: string; }
export function Indicator({ className, label, size, variant, ...props }: IndicatorProps): ReactElement {
  return <span className={cn(indicatorVariants({ size, variant }), className)} data-slot="indicator" {...props}>{label && <span className="sr-only">{label}</span>}</span>;
}
