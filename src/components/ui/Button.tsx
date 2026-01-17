"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    glow?: boolean;
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", glow = true, children, ...props }, ref) => {
        const variants = {
            primary: "bg-neon-pink text-white border-transparent",
            secondary: "bg-neon-cyan text-black border-transparent",
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
                    "group relative inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 border-2 overflow-hidden",
                    variants[variant],
                    sizes[size],
                    glow && variant === "primary" && [
                        "shadow-[0_0_20px_rgba(255,0,255,0.5)]",
                        "hover:shadow-[0_0_35px_rgba(255,0,255,0.8),0_0_10px_rgba(255,0,255,0.5)_inset]"
                    ],
                    glow && variant === "secondary" && [
                        "shadow-[0_0_20px_rgba(0,255,255,0.5)]",
                        "hover:shadow-[0_0_35px_rgba(0,255,255,0.8),0_0_10px_rgba(0,255,255,0.5)_inset]"
                    ],
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
                {/* Glow Ripple Overlay */}
                <div className="absolute inset-0 bg-white/20 translate-y-full skew-y-12 transition-transform duration-500 group-hover:-translate-y-full" />
            </motion.button>
        );
    }
);
Button.displayName = "Button";
