"use client";

import { motion } from "framer-motion";
import { BackgroundParticles } from "@/components/layout/BackgroundParticles";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowRight, Cpu, Layers, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0">
                <BackgroundParticles />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/20 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/20 blur-[150px] rounded-full animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        theme-transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-purple-500 to-neon-cyan"
                    >
                        The Future of Flavor.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Where culinary tradition downloads the latest update. Welcome to {siteConfig.name}.
                    </motion.p>
                </div>

                {/* Brand Story / Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,0,255,0.3)] border border-white/10 group">
                            <Image
                                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80"
                                alt="Futuristic Kitchen"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-mono text-neon-cyan text-sm mb-1"> SYSTEM.INIT(2024)</p>
                                <h3 className="text-2xl font-bold">Lab Environment</h3>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">Our Origin Code</h2>
                            <p className="text-gray-400 leading-relaxed">
                                NeonCrust wasn&apos;t just founded; it was compiled. We noticed a bug in the baking industry: nostalgia was overruling innovation. We decided to patch that. By fusing high-precision baking techniques with bold, avant-garde aesthetics, we created a sensory experience that feels like it belongs in 2077.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">The Protocol</h2>
                            <p className="text-gray-400 leading-relaxed">
                                We don&apos;t just bake; we engineer. Every ingredient is treated as a critical variable. Every oven time is calculated to the millisecond. The result? Textures that defy physics and flavors that upgrade your palate.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: Cpu, title: "Precision Cooking", desc: "Temperature control stable at 0.1°C variance." },
                        { icon: Layers, title: "Architecture", desc: "Structurally sound cakes with multi-layer complexity." },
                        { icon: Zap, title: "Energy", desc: "Clean ingredients fueling your daily operations." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="h-10 w-10 text-neon-pink mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
