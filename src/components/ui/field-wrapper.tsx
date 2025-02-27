import { ReactNode } from "react";
import { Label } from "./label";
import { cn } from "@/lib/utils";

type FielWrapperProps = {
    label: string;
    children: ReactNode;
    className?: string;
}

export const FieldWrapper = ({ label, className, children }: FielWrapperProps) => {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <Label>{label}</Label>
            {children}
        </div>
    )
}