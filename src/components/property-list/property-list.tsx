import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PropertyListItem { label: string; value: ReactNode; }
export interface PropertyListProps extends HTMLAttributes<HTMLDListElement> { items: PropertyListItem[]; }
export function PropertyList({ className, items, ...props }: PropertyListProps): ReactElement {
  return <dl className={cn("divide-y rounded-lg border bg-card px-4", className)} {...props}>{items.map((item) => <div className="grid grid-cols-[minmax(7rem,1fr)_2fr] gap-4 py-3 text-sm" key={item.label}><dt className="text-muted-foreground">{item.label}</dt><dd className="text-foreground">{item.value}</dd></div>)}</dl>;
}
