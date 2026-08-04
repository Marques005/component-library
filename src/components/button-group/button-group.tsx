import type { HTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function ButtonGroup({ className, orientation = "horizontal", ...props }: ButtonGroupProps): ReactElement {
  return (
    <div
      className={cn(
        "isolate inline-flex [&>[data-slot=button]]:rounded-none [&>[data-slot=button]]:focus-visible:z-10",
        orientation === "horizontal" && "[&>[data-slot=button]+[data-slot=button]]:-ms-px [&>[data-slot=button]:first-child]:rounded-s-lg [&>[data-slot=button]:last-child]:rounded-e-lg",
        orientation === "vertical" && "flex-col [&>[data-slot=button]+[data-slot=button]]:-mt-px [&>[data-slot=button]:first-child]:rounded-t-lg [&>[data-slot=button]:last-child]:rounded-b-lg",
        className,
      )}
      data-orientation={orientation}
      data-slot="button-group"
      role="group"
      {...props}
    />
  );
}
