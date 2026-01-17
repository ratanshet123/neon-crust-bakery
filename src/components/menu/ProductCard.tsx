"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Star, Plus } from "lucide-react";
import { Product } from "@/data/products";
import React, { useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { Skeleton } from "@/components/ui/Skeleton";

interface ProductCardProps {
    product: Product;
    index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className="group relative h-full rounded-2xl p-[1px] perspective-1000"
        >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-[-50%] bg-gradient-conic from-neon-pink via-neon-purple to-neon-cyan animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative h-full bg-dark-card rounded-2xl overflow-hidden flex flex-col h-full backface-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                <div className="relative h-64 w-full overflow-hidden bg-white/5">
                    {/* Skeleton Loader */}
                    <div className={cn("absolute inset-0 z-0", !isLoading && "hidden")}>
                        <Skeleton className="h-full w-full" />
                    </div>

                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={cn(
                            "object-cover transition-all duration-700 group-hover:scale-110",
                            isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                        )}
                        onLoad={() => setIsLoading(false)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {product.isBestSeller && (
                        <div className="absolute top-3 left-3 z-20 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#BC13FE]">
                            Best Seller
                        </div>
                    )}
                    {product.isNew && (
                        <div className="absolute top-3 right-3 z-20 bg-neon-cyan text-black text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#00FFFF]">
                            New
                        </div>
                    )}
                </div>

                <div className="p-5 flex flex-col flex-grow relative z-20">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-1">{product.name}</h3>
                        <div className="flex items-center gap-1 text-neon-yellow text-sm font-medium">
                            <Star className="h-4 w-4 fill-current" />
                            <span>{product.rating}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                        {product.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5 shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className="text-2xl font-heading font-bold text-white">₹{product.price}</span>
                        <Button size="sm" glow variant="secondary" className="gap-2" onClick={handleAddToCart}>
                            Add <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
