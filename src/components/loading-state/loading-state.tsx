import type { HTMLAttributes, ReactElement } from "react";
import { Spinner } from "@/components/spinner/spinner";
import { cn } from "@/lib/utils";

export interface LoadingStateProps extends HTMLAttributes<HTMLOutputElement> { label?: string; }
export function LoadingState({ className, label = "Loading", ...props }: LoadingStateProps): ReactElement { return <output aria-live="polite" className={cn("flex min-h-32 flex-col items-center justify-center gap-3 rounded-lg border text-muted-foreground text-sm", className)} {...props}><Spinner /><span>{label}</span></output>; }
