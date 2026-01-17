"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Star, Plus } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
    index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            layout
            className="group bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all flex flex-col h-full"
        >
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#BC13FE]">
                        Best Seller
                    </div>
                )}
                {product.isNew && (
                    <div className="absolute top-3 right-3 bg-neon-cyan text-black text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#00FFFF]">
                        New
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-1">{product.name}</h3>
                    <div className="flex items-center gap-1 text-neon-yellow text-sm font-medium">
                        <Star className="h-4 w-4 fill-current" />
                        <span>{product.rating}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                    {product.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-2xl font-heading font-bold text-white">₹{product.price}</span>
                    <Button size="sm" glow variant="secondary" className="gap-2">
                        Add <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
