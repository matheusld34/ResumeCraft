import { ReactNode } from "react";
import { Label } from "./label";

type FielWrapperProps = {
    label: string;
    children: ReactNode;
}

export const FieldWrapper = ({ label, children }: FielWrapperProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Label>{label}</Label>
            {children}
        </div>
    )
}