"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 bg-dark-bg">
                <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 via-transparent to-transparent opacity-50" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-neon-cyan/50 text-neon-cyan text-sm font-bold tracking-wider mb-6">
                        EST. 2024 &bull; SYSTEM ONLINE
                    </span>
                    <h1 className="text-5xl md:text-8xl font-heading font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        TASTE THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-purple-500 to-neon-cyan drop-shadow-[0_0_25px_rgba(255,0,255,0.6)]">
                            FUTURE
                        </span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        High-fidelity flavors. Next-gen textures.
                        <br />
                        Upgrade your dessert experience today.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/menu">
                            <Button size="lg" glow variant="primary" className="w-full sm:w-auto text-lg px-10 py-6">
                                Initialize Order
                            </Button>
                        </Link>
                        <Link href="/gallery">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 py-6">
                                View Gallery
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
