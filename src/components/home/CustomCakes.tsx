"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function CustomCakes() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute right-0 top-1/4 w-1/3 h-full bg-neon-purple/5 blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-neon-pink mb-4">
                            <Sparkles className="h-5 w-5" />
                            <span className="uppercase tracking-widest font-bold text-sm">Personalized Perfection</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
                            Design Your Own <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
                                Cyberpunk Masterpiece
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            From holographic glazes to neomorphic shapes, we turn your wildest imagination into edible reality. Perfect for tech launches, futuristic weddings, and next-gen parties.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "3D Printed Chocolate Toppers",
                                "Edible LED-style Piping",
                                "Interactive Flavor Cores",
                                "Gluten-Free & Vegan Options Available"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-gray-300"
                                >
                                    <span className="h-2 w-2 bg-neon-cyan rounded-full shadow-[0_0_10px_#00FFFF]" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <Link href="/contact">
                            <Button size="lg" variant="primary" glow>Start Designing</Button>
                        </Link>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-3xl transform rotate-3 blur-md" />
                        <div className="absolute inset-0 bg-dark-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800"
                                alt="Custom futuristic cake"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-6 -left-6 bg-dark-bg/90 backdrop-blur-md p-4 rounded-xl border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                        >
                            <p className="text-neon-cyan font-bold">100% Edible Neon</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
