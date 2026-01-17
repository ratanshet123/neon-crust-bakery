"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Alex C.",
        role: "Tech Enthusiast",
        text: "The Cyberpunk Velvet Cake wasn't just food, it was an experience. The neon aesthetics are mind-blowing!",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 2,
        name: "Sarah L.",
        role: "Event Planner",
        text: "Ordered the Custom Neon Cake for a product launch. Clients were taking photos of the cake more than the product!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 3,
        name: "Raj P.",
        role: "Food Blogger",
        text: "Finally, a bakery that understands the future. The flavors are as bold as the colors.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-dark-bg/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12">Transmission from Clients</h2>

                <div className="relative h-64">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-dark-card border border-white/5 rounded-2xl shadow-2xl"
                        >
                            <div className="flex gap-1 mb-4 text-neon-yellow">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-xl md:text-2xl text-gray-200 mb-6 italic">&quot;{testimonials[current].text}&quot;</p>
                            <div className="flex items-center gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={testimonials[current].avatar}
                                    alt={testimonials[current].name}
                                    className="w-12 h-12 rounded-full border-2 border-neon-cyan"
                                />
                                <div className="text-left">
                                    <p className="font-bold text-white">{testimonials[current].name}</p>
                                    <p className="text-xs text-neon-pink uppercase tracking-wider">{testimonials[current].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${current === index ? "bg-neon-cyan shadow-[0_0_10px_#00FFFF]" : "bg-gray-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
