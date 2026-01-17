"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", glow = true, children, ...props }, ref) => {
        const variants = {
            primary: "bg-neon-pink text-white hover:bg-neon-pink/80 border-transparent",
            secondary: "bg-neon-cyan text-black hover:bg-neon-cyan/80 border-transparent",
            outline: "bg-transparent border-neon-pink text-neon-pink hover:bg-neon-pink/10",
            ghost: "bg-transparent text-white hover:bg-white/10 border-transparent",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-lg font-bold transition-colors border-2",
                    variants[variant],
                    sizes[size],
                    glow && variant === "primary" && "shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:shadow-[0_0_25px_rgba(255,0,255,0.7)]",
                    glow && variant === "secondary" && "shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)]",
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
