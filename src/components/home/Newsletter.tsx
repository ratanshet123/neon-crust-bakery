"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-neon-pink/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Join the Neon Revolution</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for exclusive drops, secret menu codes, and futuristic baking tips.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow bg-black/50 border border-white/20 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
                        />
                        <Button size="lg" glow type="submit">Subscribe</Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
