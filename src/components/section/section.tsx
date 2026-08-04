import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> { title?: string; description?: string; actions?: ReactNode; }
export function Section({ actions, children, className, description, title, ...props }: SectionProps): ReactElement { return <section className={cn("rounded-xl border bg-card", className)} {...props}>{(title || description || actions) && <header className="flex items-start justify-between gap-4 border-b px-5 py-4"><div>{title && <h3 className="font-heading font-semibold text-base">{title}</h3>}{description && <p className="mt-1 text-muted-foreground text-sm">{description}</p>}</div>{actions}</header>}<div className="p-5">{children}</div></section>; }
