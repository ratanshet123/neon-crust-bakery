"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";

export function BestSellers() {
    const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink mb-4">
                        Crowd Favorites
                    </h2>
                    <p className="text-gray-400">The most requested futuristic flavors</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellers.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)]"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <Button size="sm" variant="secondary" glow>Quick Add</Button>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{product.name}</h3>
                                    <div className="flex items-center gap-1 text-neon-yellow text-sm">
                                        <Star className="h-4 w-4 fill-current" />
                                        <span>{product.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-white">₹{product.price}</span>
                                    <span className="text-xs text-neon-pink border border-neon-pink px-2 py-1 rounded-full uppercase tracking-wider">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
