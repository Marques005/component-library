import type { InputHTMLAttributes, ReactElement } from "react";
import { Input } from "@/components/input/input";

export interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> { accept?: string; multiple?: boolean; }
export function FileInput(props: FileInputProps): ReactElement { return <Input type="file" {...props} />; }
