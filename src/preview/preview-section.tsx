import type { ReactElement } from "react";
import type { ComponentRegistryItem, RegistryCategory } from "@/registry/component-registry";
import { ComponentPreview, type PreviewBackground } from "./component-preview";

export interface PreviewSectionProps { background: PreviewBackground; category: RegistryCategory; items: ComponentRegistryItem[]; }
export function PreviewSection({ background, category, items }: PreviewSectionProps): ReactElement | null {
  if (items.length === 0) return null;
  const id = `section-${category.toLowerCase().replaceAll(" ", "-")}`;
  return <section aria-labelledby={`${id}-title`} className="scroll-mt-20" id={id}><div className="mb-5"><p className="font-mono text-muted-foreground text-xs uppercase tracking-wider">{String(items.length).padStart(2, "0")} entries</p><h2 className="mt-1 font-heading font-semibold text-2xl tracking-tight" id={`${id}-title`}>{category}</h2></div><div className="preview-grid grid">{items.map((item) => <ComponentPreview background={background} item={item} key={item.slug} />)}</div></section>;
}
