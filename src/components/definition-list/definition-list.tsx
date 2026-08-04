import type { HTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

export interface DefinitionListProps extends HTMLAttributes<HTMLDListElement> { }
export function DefinitionList({ className, ...props }: DefinitionListProps): ReactElement { return <dl className={cn("grid gap-3 text-sm", className)} {...props} />; }
export interface DefinitionItemProps extends HTMLAttributes<HTMLDivElement> { term: string; }
export function DefinitionItem({ children, className, term, ...props }: DefinitionItemProps): ReactElement { return <div className={cn("grid gap-1", className)} {...props}><dt className="font-medium text-foreground">{term}</dt><dd className="text-muted-foreground">{children}</dd></div>; }
