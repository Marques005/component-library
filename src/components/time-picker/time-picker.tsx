import type { InputHTMLAttributes, ReactElement } from "react";
import { Input } from "@/components/input/input";

export interface TimePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> { step?: number; }
export function TimePicker(props: TimePickerProps): ReactElement { return <Input type="time" {...props} />; }
