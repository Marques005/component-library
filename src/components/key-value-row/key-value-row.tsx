import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface KeyValueRowProps extends HTMLAttributes<HTMLDivElement> { label: ReactNode; value: ReactNode; }
export function KeyValueRow({ className, label, value, ...props }: KeyValueRowProps): ReactElement { return <div className={cn("flex items-center justify-between gap-4 border-b py-2 text-sm last:border-b-0", className)} {...props}><span className="text-muted-foreground">{label}</span><span className="font-medium text-foreground">{value}</span></div>; }
