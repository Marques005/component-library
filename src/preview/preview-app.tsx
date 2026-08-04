import { CheckIcon, Grid2X2Icon, LaptopIcon, MenuIcon, MoonIcon, SmartphoneIcon, SunIcon, TabletIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactElement } from "react";
import { Button } from "@/components/button/button";
import { ButtonGroup } from "@/components/button-group/button-group";
import { Input } from "@/components/input/input";
import { TooltipProvider } from "@/components/tooltip/tooltip";
import { componentRegistry, registryCategories } from "@/registry/component-registry";
import type { PreviewBackground } from "./component-preview";
import { PreviewNavigation } from "./preview-navigation";
import { PreviewSection } from "./preview-section";

type Theme = "light" | "dark";
type Viewport = "desktop" | "tablet" | "mobile";
const widths: Record<Viewport, string> = { desktop: "100%", tablet: "768px", mobile: "390px" };

export function PreviewApp(): ReactElement {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("preview-theme") as Theme) || "light");
  const [density, setDensity] = useState<"default" | "compact">("default");
  const [background, setBackground] = useState<PreviewBackground>("default");
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [query, setQuery] = useState("");
  const [navigationOpen, setNavigationOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => { document.documentElement.classList.toggle("dark", theme === "dark"); localStorage.setItem("preview-theme", theme); }, [theme]);
  useEffect(() => { const handler = (event: KeyboardEvent) => { if (event.key === "/" && !event.metaKey && !event.ctrlKey && !(event.target instanceof HTMLInputElement)) { event.preventDefault(); searchRef.current?.focus(); } }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, []);

  const filtered = useMemo(() => { const value = query.trim().toLowerCase(); return value ? componentRegistry.filter((item) => `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(value)) : componentRegistry; }, [query]);
  const nextBackground = () => setBackground((value) => value === "default" ? "muted" : value === "muted" ? "checker" : "default");

  return <TooltipProvider><div data-density={density} id="top"><PreviewNavigation categories={registryCategories} items={filtered} onClose={() => setNavigationOpen(false)} open={navigationOpen} />{navigationOpen && <button aria-label="Close navigation" className="fixed inset-0 z-30 bg-black/20 lg:hidden" onClick={() => setNavigationOpen(false)} type="button" />}<div className="min-h-screen lg:pl-72"><header className="sticky top-0 z-20 flex min-h-14 flex-wrap items-center gap-2 border-b bg-background/92 px-3 py-2 backdrop-blur sm:px-5"><Button aria-label="Open navigation" className="lg:hidden" onClick={() => setNavigationOpen(true)} size="icon-sm" variant="ghost"><MenuIcon aria-hidden="true" /></Button><div className="relative min-w-48 flex-1 sm:max-w-xs"><Input aria-label="Search components" className="pe-12" onChange={(event) => setQuery(event.target.value)} placeholder="Search components…" ref={searchRef} type="search" value={query} /><kbd className="pointer-events-none absolute end-2 top-1/2 -translate-y-1/2 rounded bg-muted px-1.5 py-0.5 text-muted-foreground text-xs">/</kbd></div><ButtonGroup><Button aria-label="Desktop width" onClick={() => setViewport("desktop")} size="icon-sm" variant={viewport === "desktop" ? "secondary" : "outline"}><LaptopIcon aria-hidden="true" /></Button><Button aria-label="Tablet width" onClick={() => setViewport("tablet")} size="icon-sm" variant={viewport === "tablet" ? "secondary" : "outline"}><TabletIcon aria-hidden="true" /></Button><Button aria-label="Mobile width" onClick={() => setViewport("mobile")} size="icon-sm" variant={viewport === "mobile" ? "secondary" : "outline"}><SmartphoneIcon aria-hidden="true" /></Button></ButtonGroup><Button aria-label={`Preview background: ${background}`} onClick={nextBackground} size="icon-sm" variant="outline"><Grid2X2Icon aria-hidden="true" /></Button><Button onClick={() => setDensity((value) => value === "default" ? "compact" : "default")} size="sm" variant="outline">{density === "compact" && <CheckIcon aria-hidden="true" />}Compact</Button><Button aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} onClick={() => setTheme((value) => value === "light" ? "dark" : "light")} size="icon-sm" variant="outline">{theme === "light" ? <MoonIcon aria-hidden="true" /> : <SunIcon aria-hidden="true" />}</Button></header><main className="mx-auto min-w-0 p-4 sm:p-6 lg:p-8" style={{ maxWidth: viewport === "desktop" ? "1440px" : widths[viewport] }}><div className="mb-10 border-b pb-8"><p className="font-mono text-muted-foreground text-xs uppercase tracking-wider">Independent visual collection</p><h1 className="mt-3 max-w-3xl font-heading font-semibold text-3xl tracking-tight sm:text-4xl">Reusable interface components, in one focused catalog.</h1><p className="mt-3 max-w-2xl text-muted-foreground text-sm leading-6">COSS primitives and carefully marked extensions, presented without product context. Use search, theme, density and viewport controls to inspect behavior.</p></div>{filtered.length ? <div className="grid gap-14">{registryCategories.map((category) => <PreviewSection background={background} category={category} items={filtered.filter((item) => item.category === category)} key={category} />)}</div> : <div className="rounded-xl border border-dashed p-12 text-center"><p className="font-medium">No components found</p><p className="mt-1 text-muted-foreground text-sm">Try a different search.</p></div>}</main></div></div></TooltipProvider>;
}
