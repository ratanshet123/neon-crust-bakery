"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do you deliver to outer space?",
        answer: "Not yet, but we deliver to all major zones in the city within 45 minutes using our hyper-efficient logistics."
    },
    {
        question: "Are the neon colors edible?",
        answer: "Absolutely! We use FDA-approved, plant-based bioluminescent-style food coloring that is 100% safe and organic."
    },
    {
        question: "Can I customize a cake for my cyborg pet?",
        answer: "Yes! We specialize in custom orders. Just head over to our contact page or WhatsApp us your requirements."
    },
    {
        question: "Do you offer gluten-free options?",
        answer: "Our 'Bypass Protocol' menu features entirely gluten-free and vegan options that don't compromise on flavor."
    }
];

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white mb-12">System Support (FAQ)</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-dark-card border border-white/5 rounded-xl overflow-hidden hover:border-neon-purple/50 transition-colors"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-bold text-white text-lg">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="text-neon-pink" />
                                ) : (
                                    <Plus className="text-neon-cyan" />
                                )}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
