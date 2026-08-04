import { TriangleAlertIcon } from "lucide-react";
import type { ReactElement, ReactNode } from "react";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/empty-state/empty-state";

export interface ErrorStateProps { className?: string; title?: string; description?: string; action?: ReactNode; }
export function ErrorState({ action, className, description = "Something went wrong. Try again.", title = "Unable to load", ...props }: ErrorStateProps): ReactElement { return <Empty className={className} {...props}><EmptyHeader><EmptyMedia variant="icon"><TriangleAlertIcon /></EmptyMedia><EmptyTitle>{title}</EmptyTitle><EmptyDescription>{description}</EmptyDescription></EmptyHeader>{action && <EmptyContent>{action}</EmptyContent>}</Empty>; }
