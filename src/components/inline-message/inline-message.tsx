import { CircleAlertIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon } from "lucide-react";
import type { HTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

export type InlineMessageVariant = "info" | "success" | "warning" | "destructive";
export interface InlineMessageProps extends HTMLAttributes<HTMLParagraphElement> { variant?: InlineMessageVariant; }
const styles: Record<InlineMessageVariant, string> = { info: "text-info-foreground", success: "text-success-foreground", warning: "text-warning-foreground", destructive: "text-destructive-foreground" };
const icons = { info: InfoIcon, success: CircleCheckIcon, warning: TriangleAlertIcon, destructive: CircleAlertIcon };
export function InlineMessage({ children, className, variant = "info", ...props }: InlineMessageProps): ReactElement { const Icon = icons[variant]; return <p className={cn("flex items-start gap-2 text-sm", styles[variant], className)} role={variant === "destructive" ? "alert" : "status"} {...props}><Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0" /><span>{children}</span></p>; }
