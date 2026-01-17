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
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-heading font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan leading-tight"
                >
                    Taste the <br /> Future
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    Experience baking reimagined with cyberpunk aesthetics and next-gen flavors. Welcome to NeonCrust.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/menu">
                        <Button size="lg" glow>Explore Menu</Button>
                    </Link>
                    <Link href="/order">
                        <Button size="lg" variant="outline">Order Now</Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
