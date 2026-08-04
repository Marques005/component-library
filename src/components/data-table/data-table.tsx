import type { ReactElement, ReactNode } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table/table";

export interface DataTableColumn<T> { key: keyof T; label: string; render?: (value: T[keyof T], row: T) => ReactNode; }
export interface DataTableProps<T extends object> { caption?: string; className?: string; columns: DataTableColumn<T>[]; data: T[]; getRowKey?: (row: T, index: number) => string; }
export function DataTable<T extends object>({ caption, className, columns, data, getRowKey }: DataTableProps<T>): ReactElement {
  return (
    <Table className={className}>
      {caption && <caption className="sr-only">{caption}</caption>}
      <TableHeader><TableRow>{columns.map((column) => <TableHead key={String(column.key)}>{column.label}</TableHead>)}</TableRow></TableHeader>
      <TableBody>{data.map((row, index) => <TableRow key={getRowKey?.(row, index) ?? String(index)}>{columns.map((column) => { const value = row[column.key]; return <TableCell key={String(column.key)}>{column.render ? column.render(value, row) : String(value)}</TableCell>; })}</TableRow>)}</TableBody>
    </Table>
  );
}
