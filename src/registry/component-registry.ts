import type { ComponentType } from "react";
import { ColorsPreview } from "@/foundations/colors.preview";
import { RadiusPreview } from "@/foundations/radius.preview";
import { ShadowsPreview } from "@/foundations/shadows.preview";
import { SpacingPreview } from "@/foundations/spacing.preview";
import { TypographyPreview } from "@/foundations/typography.preview";

export type RegistryCategory = "Foundations" | "Colors" | "Typography" | "Spacing" | "Actions" | "Form Controls" | "Navigation" | "Data Display" | "Containers" | "Overlays" | "Feedback" | "Loading and Empty States";
export interface ComponentRegistryItem { slug: string; name: string; description: string; category: RegistryCategory; source: "COSS" | "COSS extension"; Preview: ComponentType; }
type PreviewModule = Record<string, ComponentType>;
const previewModules = import.meta.glob<PreviewModule>("../components/**/*.preview.tsx", { eager: true });

function getPreview(slug: string): ComponentType {
  const entry = Object.entries(previewModules).find(([path]) => path.endsWith(`/${slug}/${slug}.preview.tsx`));
  if (!entry) return () => null;
  return Object.values(entry[1])[0];
}
const item = (slug: string, name: string, description: string, category: RegistryCategory, source: ComponentRegistryItem["source"] = "COSS"): ComponentRegistryItem => ({ slug, name, description, category, source, Preview: getPreview(slug) });

export const componentRegistry: ComponentRegistryItem[] = [
  { slug: "radius", name: "Radius", description: "Corner radius scale used across surfaces and controls.", category: "Foundations", source: "COSS", Preview: RadiusPreview },
  { slug: "shadows", name: "Shadows", description: "Subtle elevation levels for layered surfaces.", category: "Foundations", source: "COSS", Preview: ShadowsPreview },
  { slug: "colors", name: "Colors", description: "Semantic color roles for light and dark mode.", category: "Colors", source: "COSS", Preview: ColorsPreview },
  { slug: "typography", name: "Typography", description: "Compact type hierarchy using system-safe fallbacks.", category: "Typography", source: "COSS", Preview: TypographyPreview },
  { slug: "spacing", name: "Spacing", description: "Shared spacing scale for layout and component rhythm.", category: "Spacing", source: "COSS", Preview: SpacingPreview },
  item("button", "Button", "Primary action with COSS variants and sizes.", "Actions"),
  item("icon-button", "Icon Button", "Accessible icon-only action.", "Actions", "COSS extension"),
  item("button-group", "Button Group", "Adjacent actions grouped as one control.", "Actions", "COSS extension"),
  item("split-button", "Split Button", "Primary action with a secondary options trigger.", "Actions", "COSS extension"),
  item("link-button", "Link Button", "Anchor rendered with button styling.", "Actions", "COSS extension"),
  item("input", "Input", "Text control with error, disabled and read-only states.", "Form Controls"),
  item("textarea", "Textarea", "Multi-line text control.", "Form Controls"),
  item("number-input", "Number Input", "Keyboard-accessible numeric stepper.", "Form Controls"),
  item("search-input", "Search Input", "Search control with leading icon and clear action.", "Form Controls", "COSS extension"),
  item("select", "Select", "Single-value selection popup.", "Form Controls"),
  item("multi-select", "Multi Select", "Multiple selection using COSS Select composition.", "Form Controls", "COSS extension"),
  item("combobox", "Combobox", "Filterable selection control.", "Form Controls"),
  item("checkbox", "Checkbox", "Binary and indeterminate selection.", "Form Controls"),
  item("radio-group", "Radio Group", "Single choice from a visible set.", "Form Controls"),
  item("switch", "Switch", "Immediate on/off setting.", "Form Controls"),
  item("date-picker", "Date Picker", "Calendar selection composed from COSS primitives.", "Form Controls", "COSS extension"),
  item("time-picker", "Time Picker", "Native time input with COSS styling.", "Form Controls", "COSS extension"),
  item("file-input", "File Input", "File selection using the COSS Input.", "Form Controls", "COSS extension"),
  item("form-field", "Form Field", "Label, control, description and validation message.", "Form Controls"),
  item("input-group", "Input Group", "Input with aligned addons and actions.", "Form Controls"),
  item("tabs", "Tabs", "Keyboard-navigable content views.", "Navigation"),
  item("breadcrumb", "Breadcrumb", "Hierarchical location trail.", "Navigation"),
  item("pagination", "Pagination", "Page navigation controls.", "Navigation"),
  item("sidebar-item", "Sidebar Item", "Compact item for neutral side navigation.", "Navigation", "COSS extension"),
  item("dropdown-menu", "Dropdown Menu", "Action menu with nested composition support.", "Navigation"),
  item("command-menu", "Command Menu", "Searchable keyboard-first command list.", "Navigation"),
  item("context-menu", "Context Menu", "Pointer and keyboard context actions.", "Navigation"),
  item("badge", "Badge", "Compact label with semantic variants.", "Data Display"),
  item("status-badge", "Status Badge", "Status-specific badge mapping.", "Data Display", "COSS extension"),
  item("avatar", "Avatar", "Image or fallback identity marker.", "Data Display"),
  item("avatar-group", "Avatar Group", "Overlapping avatar collection.", "Data Display", "COSS extension"),
  item("indicator", "Indicator", "Small semantic state dot.", "Data Display", "COSS extension"),
  item("table", "Table", "Semantic tabular data structure.", "Data Display"),
  item("data-table", "Data Table", "Typed, data-driven table composition.", "Data Display", "COSS extension"),
  item("sortable-header", "Sortable Header", "Header action with sort direction.", "Data Display", "COSS extension"),
  item("filter-chip", "Filter Chip", "Compact removable filter state.", "Data Display", "COSS extension"),
  item("property-list", "Property List", "Structured property/value display.", "Data Display", "COSS extension"),
  item("definition-list", "Definition List", "Semantic terms and descriptions.", "Data Display", "COSS extension"),
  item("key-value-row", "Key/Value Row", "Single aligned label and value pair.", "Data Display", "COSS extension"),
  item("card", "Card", "Layered content surface.", "Containers"),
  item("section", "Section", "Titled content boundary.", "Containers", "COSS extension"),
  item("separator", "Separator", "Visual or semantic content divider.", "Containers"),
  item("collapsible", "Collapsible", "Toggleable content region.", "Containers"),
  item("accordion", "Accordion", "Stack of expandable content items.", "Containers"),
  item("scroll-area", "Scroll Area", "Styled overflow region.", "Containers"),
  item("tooltip", "Tooltip", "Short contextual hint.", "Overlays"),
  item("popover", "Popover", "Anchored non-modal content.", "Overlays"),
  item("dialog", "Dialog", "Focused modal interaction.", "Overlays"),
  item("alert-dialog", "Alert Dialog", "Confirmation for consequential actions.", "Overlays"),
  item("drawer", "Drawer", "Swipe-capable edge panel.", "Overlays"),
  item("sheet", "Sheet", "Side-aligned dialog panel.", "Overlays"),
  item("hover-card", "Hover Card", "Rich preview on hover or focus.", "Overlays"),
  item("alert", "Alert", "Prominent contextual message.", "Feedback"),
  item("toast", "Toast", "Transient live notification.", "Feedback"),
  item("inline-message", "Inline Message", "Compact semantic feedback near content.", "Feedback", "COSS extension"),
  item("progress", "Progress", "Determinate progress indicator.", "Loading and Empty States"),
  item("spinner", "Spinner", "Indeterminate activity indicator.", "Loading and Empty States"),
  item("empty-state", "Empty State", "Neutral absence-of-content message.", "Loading and Empty States"),
  item("error-state", "Error State", "Recoverable failure presentation.", "Loading and Empty States", "COSS extension"),
  item("loading-state", "Loading State", "Centered loading presentation.", "Loading and Empty States", "COSS extension"),
  item("skeleton", "Skeleton", "Placeholder for pending content.", "Loading and Empty States"),
];

export const registryCategories = [...new Set(componentRegistry.map((entry) => entry.category))];
