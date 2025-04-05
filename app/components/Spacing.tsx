import { cn } from "@/lib/utils";

export type SpacingProps = {
    size? : "sm" | "mb" |"lg";
};

export const Spacing = ({ size = "mb"}: SpacingProps) => {
    return (<div className={cn({
        "h-8 lg:h-16" : size === "sm",
        "h-16 lg:h24" : size === "mb",
        "h-24 lg:h-32" : size === "lg",
        })}
        />
    );
};