import Link from "next/link";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../lib/utils";

const Button = React.forwardRef(({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    url, // Add the `url` parameter
    ...props
}, ref) => {
    const Comp = url ? Link : asChild ? Slot : "button"; // Use `Link` if `url` is provided

    return (
        <Comp
            href={url} // Pass `url` to `Link` if it exists
            className={cn(
                "flex font-medium items-center justify-center whitespace-nowrap ring-offset-background rounded-md text-md transition-all duration-500 ease-in-out transform",
                // "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                {
                    "bg-sky-400 text-black hover:bg-sky-500 hover:scale-105": variant === "default",
                    "bg-black text-white hover:bg-gray-950 hover:scale-105": variant === "secondary",
                    "border border-gray-800 text-gray-800 hover:bg-gray-100": variant === "outline",
                    "bg-transparent hover:bg-gray-100 text-black": variant === "ghost",
                    "px-4 py-3": size === "default",
                    "rounded-md px-3": size === "sm",
                    "rounded-md px-8 py-3": size === "lg",
                    "h-9 w-9": size === "icon",
                },
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

Button.displayName = "Button";
export { Button };