import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from "lucide-react";
import type { ButtonHTMLAttributes, ReactElement } from "react";
import { Button } from "@/components/button/button";

export type SortDirection = "ascending" | "descending" | "none";
export interface SortableHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> { direction?: SortDirection; }
export function SortableHeader({ children, direction = "none", ...props }: SortableHeaderProps): ReactElement {
  const Icon = direction === "ascending" ? ArrowUpIcon : direction === "descending" ? ArrowDownIcon : ArrowUpDownIcon;
  return <Button aria-sort={direction === "none" ? undefined : direction} size="sm" variant="ghost" {...props}>{children}<Icon aria-hidden="true" /></Button>;
}
