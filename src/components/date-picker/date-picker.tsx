import { CalendarIcon } from "lucide-react";
import { useState, type ReactElement } from "react";
import { Button } from "@/components/button/button";
import { Popover, PopoverPopup, PopoverTrigger } from "@/components/popover/popover";
import { Calendar } from "./calendar";

export interface DatePickerProps { className?: string; value?: Date; defaultValue?: Date; onValueChange?: (date: Date | undefined) => void; placeholder?: string; disabled?: boolean; }
export function DatePicker({ className, value, defaultValue, onValueChange, placeholder = "Select a date", disabled }: DatePickerProps): ReactElement {
  const [internal, setInternal] = useState<Date | undefined>(defaultValue);
  const selected = value ?? internal;
  const select = (date: Date | undefined) => { if (value === undefined) setInternal(date); onValueChange?.(date); };
  return (
    <Popover>
      <PopoverTrigger render={<Button className={className} disabled={disabled} variant="outline" />}>
        <CalendarIcon aria-hidden="true" />{selected ? selected.toLocaleDateString("en-GB") : placeholder}
      </PopoverTrigger>
      <PopoverPopup className="w-auto p-2"><Calendar mode="single" onSelect={select} selected={selected} /></PopoverPopup>
    </Popover>
  );
}
