import { XIcon } from "lucide-react";
import type { ReactElement } from "react";
import { Badge } from "@/components/badge/badge";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/components/select/select";

export interface MultiSelectOption { label: string; value: string; }
export interface MultiSelectProps { className?: string; options: MultiSelectOption[]; value?: MultiSelectOption[]; defaultValue?: MultiSelectOption[]; onValueChange?: (value: MultiSelectOption[]) => void; placeholder?: string; }

export function MultiSelect({ className, options, placeholder = "Select options", ...props }: MultiSelectProps): ReactElement {
  return (
    <Select items={options} multiple {...props}>
      <SelectTrigger className={className}>
        <SelectValue>{(value: MultiSelectOption[]) => value?.length ? <span className="flex flex-wrap gap-1">{value.map((item) => <Badge key={item.value} size="sm" variant="secondary">{item.label}<XIcon aria-hidden="true" /></Badge>)}</span> : placeholder}</SelectValue>
      </SelectTrigger>
      <SelectPopup>{options.map((option) => <SelectItem key={option.value} value={option}>{option.label}</SelectItem>)}</SelectPopup>
    </Select>
  );
}
