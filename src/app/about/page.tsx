"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Brand Story */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan mb-8">
                                The Story
                            </h1>
                            <div className="prose prose-invert prose-lg text-gray-400">
                                <p>
                                    NeonCrust Bakery was born from a glitch in the matrix—a vision where culinary arts merge with cyberpunk aesthetics. Founded in 2077 (or was it 2024?), our mission is to disrupt the traditional bakery scene with flavors that defy logic and visuals that hack your senses.
                                </p>
                                <p>
                                    We don&apos;t just bake; we engineer experiences. Using molecular gastronomy and bioluminescent-safe ingredients, we craft treats that look like they belong in a neon-soaked metropolis.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,0,255,0.2)]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800"
                                alt="Future bakery kitchen"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Values */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-heading font-bold text-center text-white mb-16"
                    >
                        Core Protocols
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Innovation First",
                                desc: "We constantly update our flavor firmware to bring you the newest taste technologies.",
                                icon: "🚀"
                            },
                            {
                                title: "Visual Fidelity",
                                desc: "Every pastry is rendered in 4K resolution (metaphorically). Aesthetics are non-negotiable.",
                                icon: "👁️"
                            },
                            {
                                title: "Sustainable Code",
                                desc: "Our ingredients are sourced responsibly to ensure the server (Earth) keeps running.",
                                icon: "🌱"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-card p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/50 transition-colors text-center"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
