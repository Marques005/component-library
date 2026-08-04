const spaces = [1, 2, 3, 4, 6, 8];
export function SpacingPreview() { return <div className="grid gap-3">{spaces.map((space) => <div className="flex items-center gap-4" key={space}><code className="w-16 text-muted-foreground text-xs">space-{space}</code><div className="h-3 rounded-sm bg-foreground" style={{ width: `var(--space-${space})` }} /></div>)}</div>; }
