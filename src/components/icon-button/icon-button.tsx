import type { ReactElement, ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/button/button";

export interface IconButtonProps extends Omit<ButtonProps, "children" | "size"> {
  "aria-label": string;
  children: ReactNode;
  size?: "sm" | "default" | "lg";
}

export function IconButton({ size = "default", ...props }: IconButtonProps): ReactElement {
  const buttonSize = size === "sm" ? "icon-sm" : size === "lg" ? "icon-lg" : "icon";
  return <Button size={buttonSize} {...props} />;
}
