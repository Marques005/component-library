import { XIcon } from "lucide-react";
import type { ButtonHTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

export interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> { selected?: boolean; onRemove?: () => void; }
export function FilterChip({ children, className, onRemove, selected, ...props }: FilterChipProps): ReactElement {
  return <span className={cn("inline-flex h-6 items-center overflow-hidden rounded-md border border-input bg-background text-xs", selected && "border-primary bg-primary text-primary-foreground", className)}><button aria-pressed={selected} className="h-full px-2 outline-none focus-visible:ring-2 focus-visible:ring-ring" type="button" {...props}>{children}</button>{onRemove && <button aria-label="Remove filter" className="flex h-full items-center border-s px-1.5 outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring" onClick={onRemove} type="button"><XIcon aria-hidden="true" className="size-3" /></button>}</span>;
}
