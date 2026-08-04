import type { ReactElement } from "react";
import { Badge } from "@/components/badge/badge";
import type { ComponentRegistryItem } from "@/registry/component-registry";
import { cn } from "@/lib/utils";

export type PreviewBackground = "default" | "muted" | "checker";
export interface ComponentPreviewProps { item: ComponentRegistryItem; background: PreviewBackground; }

export function ComponentPreview({ background, item }: ComponentPreviewProps): ReactElement {
  const { Preview } = item;
  return (
    <article className="scroll-mt-20 overflow-hidden rounded-xl border bg-card" id={item.slug}>
      <header className="flex flex-col gap-3 border-b px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div><h3 className="font-heading font-semibold text-base">{item.name}</h3><p className="mt-1 max-w-2xl text-muted-foreground text-sm">{item.description}</p></div>
        <Badge className="w-fit" variant={item.source === "COSS" ? "outline" : "secondary"}>{item.source}</Badge>
      </header>
      <div className={cn("min-w-0 overflow-x-auto p-5 sm:p-8", background === "muted" && "bg-muted/60", background === "checker" && "preview-checker")}>
        <Preview />
      </div>
    </article>
  );
}
