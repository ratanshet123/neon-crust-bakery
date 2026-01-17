"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Highlights() {
    const highlightProducts = products.filter(p => p.isNew || p.isBestSeller).slice(0, 5);
    // Simple horizontal scroll for now

    return (
        <section className="py-20 bg-dark-bg/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex justify-between items-center mb-12"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Today&apos;s Highlights</h2>
                        <p className="text-gray-400">Fresh from the quantum ovens</p>
                    </div>
                    <Link href="/menu">
                        <Button variant="ghost" size="sm">View All →</Button>
                    </Link>
                </motion.div>

                <div className="flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide">
                    {highlightProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="min-w-[300px] md:min-w-[350px] snap-center bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-neon-pink/50 transition-colors group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-neon-pink text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-neon-cyan">₹{product.price}</span>
                                    <Button size="sm" variant="secondary">Add</Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
