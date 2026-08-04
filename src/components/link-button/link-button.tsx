import type { AnchorHTMLAttributes, ReactElement } from "react";
import { Button, type ButtonProps } from "@/components/button/button";

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

export function LinkButton({ children, href, variant = "link", size, ...props }: LinkButtonProps): ReactElement {
  return (
    <Button render={<a href={href} {...props} />} size={size} variant={variant}>
      {children}
    </Button>
  );
}
