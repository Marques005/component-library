import type { ReactElement } from "react";
import { Badge, type BadgeProps } from "@/components/badge/badge";

export type StatusBadgeStatus = "active" | "pending" | "completed" | "error" | "inactive";
export interface StatusBadgeProps extends Omit<BadgeProps, "variant"> { status: StatusBadgeStatus; }

const variants: Record<StatusBadgeStatus, BadgeProps["variant"]> = {
  active: "success", pending: "warning", completed: "info", error: "error", inactive: "secondary",
};

export function StatusBadge({ status, children, ...props }: StatusBadgeProps): ReactElement {
  return <Badge variant={variants[status]} {...props}>{children ?? status[0].toUpperCase() + status.slice(1)}</Badge>;
}
