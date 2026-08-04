# Independent COSS Component Library

An isolated React component collection and Vite preview. It contains no product logic, API calls, authentication, persistence, or dependency on another application in this repository.

The visual rules and direct component adaptations come from the COSS source included in the upstream repository. The collection preserves COSS composition conventions, Base UI primitives, semantic tokens, compact control sizing, focus rings, light/dark behavior, and `className` support. It intentionally does not include COSS or Cal.com names, logos, copy, or visual assets in the preview UI.

## Install and run

```bash
npm install
npm run dev
```

The preview runs at `http://localhost:4173`. It includes component search, category navigation, light/dark mode, catalog density, background switching, and desktop/tablet/mobile width controls.

Validation commands:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Import a component

Import from the component folder to keep dependencies explicit:

```tsx
import { Button } from "./src/components/button";

export function Example() {
  return <Button variant="outline">Example action</Button>;
}
```

Every component folder contains its implementation, preview, public `index.ts`, and exported TypeScript props or underlying Base UI prop types.

## Variants

Variants follow the original COSS API where one exists. Common examples include:

- `Button`: `default`, `secondary`, `outline`, `ghost`, `link`, `destructive`, `destructive-outline`; sizes from `xs` through `xl` and icon sizes; loading and disabled states.
- `Badge`: `default`, `secondary`, `outline`, `success`, `warning`, `info`, `error`, `destructive`; `sm`, `default`, and `lg`.
- Inputs and selection controls: `sm`, `default`, and `lg` where supported; invalid, disabled, required, and read-only states use native or Base UI semantics.
- `Tabs`: default and underline styles.
- `Table`: default and card presentation.
- Feedback: semantic information, success, warning, and destructive roles.

The preview beside each component is the canonical small example for its supported states.

## Add a component

1. Create `src/components/example/example.tsx` with explicit props and a `className` escape hatch.
2. Use an existing COSS primitive first. If none exists, compose Base UI and the semantic tokens in `src/styles/tokens.css`.
3. Add `example.preview.tsx` and export both files from `index.ts`.
4. Register the component in `src/registry/component-registry.ts`, marking it as `COSS` or `COSS extension`.
5. Export it from `src/index.ts` and run all validation commands.

## Tokens and themes

Semantic tokens live in `src/styles/tokens.css`. Change roles such as `--background`, `--surface`, `--primary`, `--border`, `--ring`, radii, shadows, spacing, typography, and control heights there instead of introducing hard-coded component values.

Light mode uses `:root`; dark mode uses the `.dark` class on the root HTML element:

```ts
document.documentElement.classList.toggle("dark", enabled);
```

`src/styles/globals.css` maps the CSS variables to Tailwind utilities and contains only shared reset, preview, and reduced-motion behavior.

## Component provenance

Direct COSS adaptations:

- Accordion, Alert, Alert Dialog, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, Collapsible, Combobox, Command Menu, Context Menu, Dialog, Drawer, Dropdown Menu, Empty State, Form Field, Hover Card / Preview Card, Input, Input Group, Number Input / Number Field, Pagination, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Spinner, Switch, Table, Tabs, Textarea, Toast, and Tooltip.

COSS-style extensions composed from those primitives and Base UI conventions:

- Avatar Group, Button Group, Data Table, Date Picker composition, Definition List, Error State, File Input, Filter Chip, Icon Button, Indicator, Inline Message, Key/Value Row, Link Button, Loading State, Multi Select, Property List, Search Input, Section, Sidebar Item, Sortable Header, Split Button, Status Badge, and Time Picker.

Supporting internal COSS adaptations (`Autocomplete` and `Label`) are included only because public components depend on them.

## Licensing

Adapted COSS component source retains the licensing obligations of the upstream repository. Review the repository license before redistribution. New preview and extension code in this folder is designed to be distributed under the same compatible terms; no brand assets are included.
