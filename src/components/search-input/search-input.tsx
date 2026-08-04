import { SearchIcon, XIcon } from "lucide-react";
import type { InputHTMLAttributes, ReactElement } from "react";
import { Button } from "@/components/button/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/input-group/input-group";

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> { onClear?: () => void; }
export function SearchInput({ onClear, value, defaultValue, ...props }: SearchInputProps): ReactElement {
  const hasValue = String(value ?? defaultValue ?? "").length > 0;
  return (
    <InputGroup>
      <InputGroupInput type="search" value={value} defaultValue={defaultValue} {...props} />
      <InputGroupAddon><SearchIcon aria-hidden="true" /></InputGroupAddon>
      {onClear && hasValue && <InputGroupAddon align="inline-end"><Button aria-label="Clear search" onClick={onClear} size="icon-xs" variant="ghost"><XIcon aria-hidden="true" /></Button></InputGroupAddon>}
    </InputGroup>
  );
}
