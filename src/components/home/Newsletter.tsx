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
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Subscribe for <span className="text-neon-pink text-glow">Updates</span>
                    </h2>
                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                        Join our uplink. Get the latest flavor patches and promo vectors delivered directly to your inbox.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email frequency..."
                            className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all"
                        />
                        <Button size="lg" glow variant="primary" className="whitespace-nowrap">
                            Connect
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
