import type { ButtonHTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

export interface SidebarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> { active?: boolean; icon?: ReactElement; badge?: ReactElement; }
export function SidebarItem({ active, badge, children, className, icon, type = "button", ...props }: SidebarItemProps): ReactElement {
  return (
    <button aria-current={active ? "page" : undefined} className={cn("flex h-8 w-full items-center gap-2 rounded-lg px-2 text-left text-sm outline-none transition-colors hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-sidebar-ring disabled:pointer-events-none disabled:opacity-64", active && "bg-sidebar-accent font-medium text-sidebar-accent-foreground", className)} data-slot="sidebar-item" type={type} {...props}>
      {icon && <span className="[&_svg]:size-4 [&_svg]:opacity-80">{icon}</span>}<span className="min-w-0 flex-1 truncate">{children}</span>{badge}
    </button>
  );
}
