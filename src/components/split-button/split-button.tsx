import { ChevronDownIcon } from "lucide-react";
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { Button } from "@/components/button/button";
import { ButtonGroup } from "@/components/button-group/button-group";

export interface SplitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  menuLabel?: string;
  onMenuClick?: () => void;
}

export function SplitButton({ children, menuLabel = "Open options", onMenuClick, ...props }: SplitButtonProps): ReactElement {
  return (
    <ButtonGroup>
      <Button {...props}>{children}</Button>
      <Button aria-label={menuLabel} onClick={onMenuClick} size="icon" variant="default">
        <ChevronDownIcon aria-hidden="true" />
      </Button>
    </ButtonGroup>
  );
}
