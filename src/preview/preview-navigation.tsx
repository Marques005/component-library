import { XIcon } from "lucide-react";
import type { ReactElement } from "react";
import { Button } from "@/components/button/button";
import type { ComponentRegistryItem, RegistryCategory } from "@/registry/component-registry";

export interface PreviewNavigationProps { categories: RegistryCategory[]; items: ComponentRegistryItem[]; open: boolean; onClose: () => void; }
export function PreviewNavigation({ categories, items, onClose, open }: PreviewNavigationProps): ReactElement {
  return <aside className={`${open ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 w-72 border-r bg-sidebar transition-transform lg:translate-x-0`}><div className="flex h-14 items-center justify-between border-b px-4"><a className="font-heading font-semibold text-sm" href="#top" onClick={onClose}>Component Library</a><Button aria-label="Close navigation" className="lg:hidden" onClick={onClose} size="icon-sm" variant="ghost"><XIcon aria-hidden="true" /></Button></div><nav aria-label="Component catalog" className="h-[calc(100vh-3.5rem)] overflow-y-auto p-3">{categories.map((category) => { const categoryItems = items.filter((item) => item.category === category); if (!categoryItems.length) return null; const sectionId = `section-${category.toLowerCase().replaceAll(" ", "-")}`; return <div className="mb-5" key={category}><a className="mb-1 block px-2 font-medium text-muted-foreground text-xs hover:text-foreground" href={`#${sectionId}`} onClick={onClose}>{category}</a><div className="grid">{categoryItems.map((item) => <a className="rounded-md px-2 py-1.5 text-sm hover:bg-sidebar-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring" href={`#${item.slug}`} key={item.slug} onClick={onClose}>{item.name}</a>)}</div></div>; })}</nav></aside>;
}
