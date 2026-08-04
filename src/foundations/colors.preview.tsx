const colors = [
  ["Background", "bg-background"], ["Surface", "bg-card"], ["Elevated", "bg-popover"],
  ["Primary", "bg-primary"], ["Secondary", "bg-secondary"], ["Accent", "bg-accent"],
  ["Success", "bg-success"], ["Warning", "bg-warning"], ["Destructive", "bg-destructive"], ["Information", "bg-info"],
];
export function ColorsPreview() { return <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{colors.map(([label, color]) => <div key={label}><div className={`h-16 rounded-lg border ${color}`} /><p className="mt-2 text-muted-foreground text-xs">{label}</p></div>)}</div>; }
