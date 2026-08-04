import { ChevronDownIcon, EllipsisIcon, FolderIcon, PlusIcon, SearchIcon } from "lucide-react";
import { useState, type ReactElement } from "react";
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/components/accordion/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/alert/alert";
import { AlertDialog, AlertDialogClose, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogPopup, AlertDialogTitle, AlertDialogTrigger } from "@/components/alert-dialog/alert-dialog";
import { Avatar, AvatarFallback } from "@/components/avatar/avatar";
import { AvatarGroup } from "@/components/avatar-group/avatar-group";
import { Badge } from "@/components/badge/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/breadcrumb/breadcrumb";
import { Button } from "@/components/button/button";
import { ButtonGroup } from "@/components/button-group/button-group";
import { Card, CardDescription, CardFooter, CardHeader, CardPanel, CardTitle } from "@/components/card/card";
import { Checkbox } from "@/components/checkbox/checkbox";
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/components/collapsible/collapsible";
import { Combobox, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxPopup } from "@/components/combobox/combobox";
import { Command, CommandEmpty, CommandGroup, CommandGroupLabel, CommandInput, CommandItem, CommandList } from "@/components/command-menu/command-menu";
import { ContextMenu, ContextMenuItem, ContextMenuPopup, ContextMenuTrigger } from "@/components/context-menu/context-menu";
import { DataTable } from "@/components/data-table/data-table";
import { DatePicker } from "@/components/date-picker/date-picker";
import { DefinitionItem, DefinitionList } from "@/components/definition-list/definition-list";
import { Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogPanel, DialogPopup, DialogTitle, DialogTrigger } from "@/components/dialog/dialog";
import { Drawer, DrawerClose, DrawerDescription, DrawerFooter, DrawerHeader, DrawerPopup, DrawerTitle, DrawerTrigger } from "@/components/drawer/drawer";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/empty-state/empty-state";
import { ErrorState } from "@/components/error-state/error-state";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/form-field/form-field";
import { FileInput } from "@/components/file-input/file-input";
import { FilterChip } from "@/components/filter-chip/filter-chip";
import { PreviewCard, PreviewCardPopup, PreviewCardTrigger } from "@/components/hover-card/hover-card";
import { IconButton } from "@/components/icon-button/icon-button";
import { Indicator } from "@/components/indicator/indicator";
import { InlineMessage } from "@/components/inline-message/inline-message";
import { Input } from "@/components/input/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/input-group/input-group";
import { KeyValueRow } from "@/components/key-value-row/key-value-row";
import { LinkButton } from "@/components/link-button/link-button";
import { LoadingState } from "@/components/loading-state/loading-state";
import { Menu, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "@/components/dropdown-menu/dropdown-menu";
import { MultiSelect } from "@/components/multi-select/multi-select";
import { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput } from "@/components/number-input/number-input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/pagination/pagination";
import { Popover, PopoverDescription, PopoverPopup, PopoverTitle, PopoverTrigger } from "@/components/popover/popover";
import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue } from "@/components/progress/progress";
import { PropertyList } from "@/components/property-list/property-list";
import { Radio, RadioGroup } from "@/components/radio-group/radio-group";
import { ScrollArea } from "@/components/scroll-area/scroll-area";
import { SearchInput } from "@/components/search-input/search-input";
import { Section } from "@/components/section/section";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/components/select/select";
import { Separator } from "@/components/separator/separator";
import { Sheet, SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetPanel, SheetPopup, SheetTitle, SheetTrigger } from "@/components/sheet/sheet";
import { SidebarItem } from "@/components/sidebar-item/sidebar-item";
import { Skeleton } from "@/components/skeleton/skeleton";
import { SortableHeader } from "@/components/sortable-header/sortable-header";
import { Spinner } from "@/components/spinner/spinner";
import { SplitButton } from "@/components/split-button/split-button";
import { StatusBadge } from "@/components/status-badge/status-badge";
import { Switch } from "@/components/switch/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table/table";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/tabs/tabs";
import { Textarea } from "@/components/textarea/textarea";
import { TimePicker } from "@/components/time-picker/time-picker";
import { toastManager, ToastProvider } from "@/components/toast/toast";
import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "@/components/tooltip/tooltip";

const options = [
  { label: "Item 01", value: "item-01" },
  { label: "Item 02", value: "item-02" },
  { label: "Item 03", value: "item-03" },
];
const rows = [
  { name: "Item 01", status: "Active", value: 128 },
  { name: "Item 02", status: "Pending", value: 64 },
  { name: "Item 03", status: "Completed", value: 32 },
];

function Row({ children }: { children: React.ReactNode }): ReactElement {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

export interface PreviewSampleProps { component: string; }
export function PreviewSample({ component }: PreviewSampleProps): ReactElement {
  const [search, setSearch] = useState("Example");

  switch (component) {
    case "button": return <div className="grid gap-4"><Row><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="destructive">Destructive</Button></Row><Row><Button size="sm">Small</Button><Button>Medium</Button><Button size="lg">Large</Button><Button disabled>Disabled</Button><Button loading>Loading</Button><Button><PlusIcon aria-hidden="true" />With icon</Button></Row></div>;
    case "icon-button": return <Row><IconButton aria-label="Add item"><PlusIcon aria-hidden="true" /></IconButton><IconButton aria-label="More options" size="sm" variant="outline"><EllipsisIcon aria-hidden="true" /></IconButton><IconButton aria-label="Disabled action" disabled><PlusIcon aria-hidden="true" /></IconButton></Row>;
    case "button-group": return <ButtonGroup><Button variant="outline">Item 01</Button><Button variant="outline">Item 02</Button><Button variant="outline">Item 03</Button></ButtonGroup>;
    case "split-button": return <SplitButton onMenuClick={() => undefined}>Example action</SplitButton>;
    case "link-button": return <Row><LinkButton href="#actions">Link button</LinkButton><LinkButton href="#actions" variant="outline">Outline link</LinkButton></Row>;
    case "badge": return <Row><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge><Badge variant="success">Completed</Badge><Badge variant="warning">Pending</Badge><Badge variant="error">Error</Badge></Row>;
    case "status-badge": return <Row><StatusBadge status="active" /><StatusBadge status="pending" /><StatusBadge status="completed" /><StatusBadge status="error" /><StatusBadge status="inactive" /></Row>;
    case "avatar": return <Row><Avatar><AvatarFallback>EX</AvatarFallback></Avatar><Avatar className="size-10"><AvatarFallback>01</AvatarFallback></Avatar></Row>;
    case "avatar-group": return <AvatarGroup max={3}><Avatar><AvatarFallback>01</AvatarFallback></Avatar><Avatar><AvatarFallback>02</AvatarFallback></Avatar><Avatar><AvatarFallback>03</AvatarFallback></Avatar><Avatar><AvatarFallback>04</AvatarFallback></Avatar></AvatarGroup>;
    case "indicator": return <Row><Indicator label="Active" variant="success" /><Indicator label="Pending" variant="warning" /><Indicator label="Error" variant="destructive" /><Indicator label="Information" variant="info" /></Row>;
    case "progress": return <Progress className="w-full max-w-sm" value={64}><div className="mb-2 flex justify-between"><ProgressLabel>Progress</ProgressLabel><ProgressValue /></div><ProgressTrack><ProgressIndicator /></ProgressTrack></Progress>;
    case "spinner": return <Row><Spinner /><Spinner className="size-5" /><Button loading>Loading</Button></Row>;
    case "input": return <div className="grid max-w-sm gap-3"><Input aria-label="Example name" placeholder="Example name" type="text" /><Input aria-label="Read only" readOnly type="text" value="Read-only" /><Input aria-invalid aria-label="Error input" defaultValue="Invalid value" type="text" /><Input aria-label="Disabled input" disabled placeholder="Disabled" type="text" /></div>;
    case "textarea": return <div className="grid max-w-sm gap-3"><Textarea aria-label="Example text" placeholder="Example text" /><Textarea aria-label="Read-only text" readOnly value="Read-only example" /></div>;
    case "number-input": return <NumberField className="max-w-44" defaultValue={24}><NumberFieldGroup><NumberFieldDecrement /><NumberFieldInput /><NumberFieldIncrement /></NumberFieldGroup></NumberField>;
    case "search-input": return <SearchInput aria-label="Search" onChange={(event) => setSearch(event.target.value)} onClear={() => setSearch("")} placeholder="Search" value={search} />;
    case "select": return <Select defaultValue={options[0]} items={options}><SelectTrigger className="max-w-64"><SelectValue placeholder="Select an option" /></SelectTrigger><SelectPopup>{options.map((item) => <SelectItem key={item.value} value={item}>{item.label}</SelectItem>)}</SelectPopup></Select>;
    case "multi-select": return <MultiSelect className="max-w-sm" defaultValue={[options[0]]} options={options} />;
    case "combobox": return <Combobox items={options}><ComboboxInput aria-label="Select an option" placeholder="Select an option" /><ComboboxPopup><ComboboxEmpty>No items found.</ComboboxEmpty><ComboboxList>{(item) => <ComboboxItem key={item.value} value={item}>{item.label}</ComboboxItem>}</ComboboxList></ComboboxPopup></Combobox>;
    case "checkbox": return <Row><span className="flex items-center gap-2 text-sm"><Checkbox aria-label="Active" defaultChecked />Active</span><span className="flex items-center gap-2 text-sm"><Checkbox aria-label="Pending" />Pending</span><span className="flex items-center gap-2 text-sm"><Checkbox aria-label="Disabled" disabled />Disabled</span></Row>;
    case "radio-group": return <RadioGroup aria-label="Example options" className="grid gap-2" defaultValue="one"><span className="flex items-center gap-2 text-sm"><Radio aria-label="Item 01" value="one" />Item 01</span><span className="flex items-center gap-2 text-sm"><Radio aria-label="Item 02" value="two" />Item 02</span></RadioGroup>;
    case "switch": return <Row><span className="flex items-center gap-2 text-sm"><Switch aria-label="Active" defaultChecked />Active</span><span className="flex items-center gap-2 text-sm"><Switch aria-label="Inactive" />Inactive</span><span className="flex items-center gap-2 text-sm"><Switch aria-label="Disabled" disabled />Disabled</span></Row>;
    case "date-picker": return <DatePicker defaultValue={new Date(2026, 7, 4)} />;
    case "time-picker": return <TimePicker aria-label="Select time" className="max-w-40" defaultValue="10:30" />;
    case "file-input": return <FileInput aria-label="Select file" className="max-w-sm" />;
    case "form-field": return <Field className="max-w-sm" name="example"><FieldLabel>Example name</FieldLabel><Input required type="text" /><FieldDescription>Use a short, descriptive value.</FieldDescription><FieldError match="valueMissing">This field is required.</FieldError></Field>;
    case "input-group": return <InputGroup className="max-w-sm"><InputGroupInput aria-label="Search" placeholder="Search" type="search" /><InputGroupAddon><SearchIcon aria-hidden="true" /></InputGroupAddon><InputGroupAddon align="inline-end"><InputGroupText>⌘ K</InputGroupText></InputGroupAddon></InputGroup>;
    case "tabs": return <Tabs defaultValue="one"><TabsList><TabsTab value="one">Item 01</TabsTab><TabsTab value="two">Item 02</TabsTab><TabsTab value="three">Item 03</TabsTab></TabsList><TabsPanel className="pt-4 text-sm" value="one">Example content 01.</TabsPanel><TabsPanel className="pt-4 text-sm" value="two">Example content 02.</TabsPanel><TabsPanel className="pt-4 text-sm" value="three">Example content 03.</TabsPanel></Tabs>;
    case "breadcrumb": return <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="#navigation">Item 01</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Item 02</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>;
    case "pagination": return <Pagination><PaginationContent><PaginationItem><PaginationPrevious href="#navigation" /></PaginationItem><PaginationItem><PaginationLink href="#navigation" isActive>1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#navigation">2</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="#navigation" /></PaginationItem></PaginationContent></Pagination>;
    case "sidebar-item": return <div className="w-56 rounded-lg bg-sidebar p-2"><SidebarItem active icon={<FolderIcon />}>Item 01</SidebarItem><SidebarItem icon={<FolderIcon />}>Item 02</SidebarItem><SidebarItem badge={<Badge size="sm" variant="secondary">3</Badge>} icon={<FolderIcon />}>Item 03</SidebarItem></div>;
    case "dropdown-menu": return <Menu><MenuTrigger render={<Button variant="outline" />}>Open menu<ChevronDownIcon aria-hidden="true" /></MenuTrigger><MenuPopup><MenuItem>Item 01</MenuItem><MenuItem>Item 02</MenuItem><MenuSeparator /><MenuItem variant="destructive">Remove</MenuItem></MenuPopup></Menu>;
    case "command-menu": return <div className="w-full max-w-sm rounded-lg border"><Command items={options}><CommandInput placeholder="Search" /><CommandList><CommandEmpty>No items found.</CommandEmpty><CommandGroup><CommandGroupLabel>Items</CommandGroupLabel>{options.map((item) => <CommandItem key={item.value} value={item}>{item.label}</CommandItem>)}</CommandGroup></CommandList></Command></div>;
    case "context-menu": return <ContextMenu><ContextMenuTrigger className="flex h-28 w-full max-w-sm items-center justify-center rounded-lg border border-dashed text-muted-foreground text-sm">Right-click this area</ContextMenuTrigger><ContextMenuPopup><ContextMenuItem>Item 01</ContextMenuItem><ContextMenuItem>Item 02</ContextMenuItem></ContextMenuPopup></ContextMenu>;
    case "card": return <Card className="max-w-sm"><CardHeader><CardTitle>Example name</CardTitle><CardDescription>Short, neutral description.</CardDescription></CardHeader><CardPanel>Example content.</CardPanel><CardFooter><Button size="sm">Action</Button></CardFooter></Card>;
    case "section": return <Section actions={<Button size="sm" variant="outline">Action</Button>} description="Short, neutral description." title="Example section">Example content.</Section>;
    case "separator": return <div className="max-w-sm text-sm"><div>Item 01</div><Separator className="my-3" /><div>Item 02</div></div>;
    case "collapsible": return <Collapsible className="max-w-sm"><CollapsibleTrigger render={<Button variant="outline" />}>Toggle content</CollapsibleTrigger><CollapsiblePanel className="pt-3 text-muted-foreground text-sm">Example hidden content.</CollapsiblePanel></Collapsible>;
    case "accordion": return <Accordion className="max-w-md" defaultValue={["one"]}><AccordionItem value="one"><AccordionTrigger>Item 01</AccordionTrigger><AccordionPanel>Example content 01.</AccordionPanel></AccordionItem><AccordionItem value="two"><AccordionTrigger>Item 02</AccordionTrigger><AccordionPanel>Example content 02.</AccordionPanel></AccordionItem></Accordion>;
    case "scroll-area": return <ScrollArea className="h-32 max-w-sm rounded-lg border p-3"><div className="grid gap-3">{Array.from({ length: 12 }, (_, index) => `Item ${String(index + 1).padStart(2, "0")}`).map((label) => <p className="text-sm" key={label}>{label}</p>)}</div></ScrollArea>;
    case "table": return <Table><TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Value</TableHead></TableRow></TableHeader><TableBody>{rows.map((row) => <TableRow key={row.name}><TableCell>{row.name}</TableCell><TableCell>{row.status}</TableCell><TableCell className="text-right">{row.value}</TableCell></TableRow>)}</TableBody></Table>;
    case "data-table": return <DataTable caption="Example items" columns={[{ key: "name", label: "Name" }, { key: "status", label: "Status" }, { key: "value", label: "Value" }]} data={rows} />;
    case "sortable-header": return <Row><SortableHeader direction="ascending">Name</SortableHeader><SortableHeader direction="descending">Value</SortableHeader><SortableHeader>Status</SortableHeader></Row>;
    case "filter-chip": return <Row><FilterChip selected>Active</FilterChip><FilterChip onRemove={() => undefined}>Pending</FilterChip><FilterChip>Completed</FilterChip></Row>;
    case "property-list": return <PropertyList className="max-w-md" items={[{ label: "Name", value: "Example name" }, { label: "Status", value: "Active" }, { label: "Value", value: "128" }]} />;
    case "definition-list": return <DefinitionList className="max-w-md"><DefinitionItem term="Item 01">Example definition 01.</DefinitionItem><DefinitionItem term="Item 02">Example definition 02.</DefinitionItem></DefinitionList>;
    case "key-value-row": return <div className="max-w-md"><KeyValueRow label="Name" value="Example name" /><KeyValueRow label="Status" value="Active" /><KeyValueRow label="Value" value="128" /></div>;
    case "tooltip": return <TooltipProvider><Tooltip><TooltipTrigger render={<Button variant="outline" />}>Hover or focus</TooltipTrigger><TooltipPopup>Example tooltip</TooltipPopup></Tooltip></TooltipProvider>;
    case "popover": return <Popover><PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger><PopoverPopup><PopoverTitle>Example name</PopoverTitle><PopoverDescription>Short, neutral description.</PopoverDescription></PopoverPopup></Popover>;
    case "dialog": return <Dialog><DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger><DialogPopup><DialogHeader><DialogTitle>Example name</DialogTitle><DialogDescription>Short, neutral description.</DialogDescription></DialogHeader><DialogPanel>Example content.</DialogPanel><DialogFooter><DialogClose render={<Button variant="outline" />}>Cancel</DialogClose><DialogClose render={<Button />}>Confirm</DialogClose></DialogFooter></DialogPopup></Dialog>;
    case "alert-dialog": return <AlertDialog><AlertDialogTrigger render={<Button variant="destructive" />}>Open alert</AlertDialogTrigger><AlertDialogPopup><AlertDialogHeader><AlertDialogTitle>Confirm action</AlertDialogTitle><AlertDialogDescription>This action requires confirmation.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogClose render={<Button variant="outline" />}>Cancel</AlertDialogClose><AlertDialogClose render={<Button variant="destructive" />}>Confirm</AlertDialogClose></AlertDialogFooter></AlertDialogPopup></AlertDialog>;
    case "drawer": return <Drawer><DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger><DrawerPopup showBar><DrawerHeader><DrawerTitle>Example drawer</DrawerTitle><DrawerDescription>Short, neutral description.</DrawerDescription></DrawerHeader><DrawerFooter><DrawerClose render={<Button variant="outline" />}>Close</DrawerClose></DrawerFooter></DrawerPopup></Drawer>;
    case "sheet": return <Sheet><SheetTrigger render={<Button variant="outline" />}>Open sheet</SheetTrigger><SheetPopup><SheetHeader><SheetTitle>Example sheet</SheetTitle><SheetDescription>Short, neutral description.</SheetDescription></SheetHeader><SheetPanel>Example content.</SheetPanel><SheetFooter><SheetClose render={<Button variant="outline" />}>Close</SheetClose></SheetFooter></SheetPopup></Sheet>;
    case "hover-card": return <PreviewCard><PreviewCardTrigger render={<Button variant="link" />}>Hover for details</PreviewCardTrigger><PreviewCardPopup><p className="font-medium text-sm">Example name</p><p className="mt-1 text-muted-foreground text-sm">Short, neutral description.</p></PreviewCardPopup></PreviewCard>;
    case "alert": return <div className="grid max-w-lg gap-3"><Alert><AlertTitle>Information</AlertTitle><AlertDescription>Example information message.</AlertDescription></Alert><Alert variant="error"><AlertTitle>Error</AlertTitle><AlertDescription>Example error message.</AlertDescription></Alert></div>;
    case "toast": return <ToastProvider><Button onClick={() => toastManager.add({ title: "Completed", description: "Example notification.", type: "success" })}>Show toast</Button></ToastProvider>;
    case "empty-state": return <Empty><EmptyHeader><EmptyMedia variant="icon"><SearchIcon /></EmptyMedia><EmptyTitle>No items found</EmptyTitle><EmptyDescription>Try a different search.</EmptyDescription></EmptyHeader></Empty>;
    case "error-state": return <ErrorState action={<Button size="sm" variant="outline">Try again</Button>} />;
    case "loading-state": return <LoadingState />;
    case "skeleton": return <div className="grid max-w-sm gap-3"><Skeleton className="h-8 w-40" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /></div>;
    case "inline-message": return <div className="grid gap-3"><InlineMessage>Information message.</InlineMessage><InlineMessage variant="success">Completed successfully.</InlineMessage><InlineMessage variant="warning">Pending action.</InlineMessage><InlineMessage variant="destructive">Error message.</InlineMessage></div>;
    default: return <p className="text-muted-foreground text-sm">Preview unavailable.</p>;
  }
}
