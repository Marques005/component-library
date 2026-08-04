import type { HTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> { max?: number; }

export function AvatarGroup({ children, className, max, ...props }: AvatarGroupProps): ReactElement {
  const items = Array.isArray(children) ? children : [children];
  const visible = max ? items.slice(0, max) : items;
  const hidden = max ? Math.max(items.length - max, 0) : 0;
  return (
    <div className={cn("flex -space-x-2 [&>[data-slot=avatar]]:ring-2 [&>[data-slot=avatar]]:ring-background", className)} data-slot="avatar-group" {...props}>
      {visible}
      {hidden > 0 && <span className="relative flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs ring-2 ring-background">+{hidden}</span>}
    </div>
  );
}
