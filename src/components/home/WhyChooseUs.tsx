"use client";

import { motion } from "framer-motion";
import { EggOff, Award, Clock, Palette } from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "Daily Compile",
        desc: "Fresh code... er, dough, baked every morning at 0400.",
        color: "text-neon-yellow",
        shadow: "shadow-[0_0_15px_rgba(255,255,0,0.3)]"
    },
    {
        icon: Award,
        title: "High-Res Ingredients",
        desc: "Imported chocolate & organic flour rendered in 4K.",
        color: "text-neon-pink",
        shadow: "shadow-[0_0_15px_rgba(255,0,255,0.3)]"
    },
    {
        icon: EggOff,
        title: "Eggless Kernel",
        desc: "100% vegetarian logic. Same great taste, zero eggs.",
        color: "text-neon-cyan",
        shadow: "shadow-[0_0_15px_rgba(0,255,255,0.3)]"
    },
    {
        icon: Palette,
        title: "Custom Mods",
        desc: "3D cakes tailored to your specific imagination.",
        color: "text-neon-purple",
        shadow: "shadow-[0_0_15px_rgba(188,19,254,0.3)]"
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Why <span className="text-neon-cyan text-glow">NeonCrust?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We blend traditional baking mastery with futuristic precision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all text-center group"
                        >
                            <div className={`mx-auto w-16 h-16 rounded-full bg-black/50 flex items-center justify-center mb-6 ${feature.color} ${feature.shadow}`}>
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
