"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
    {
        name: "Aarav P.",
        rating: 5,
        text: "The cyberpunk theme is insane, but the Red Velvet cake is even better. Best bakery in town!",
        date: "2 days ago"
    },
    {
        name: "Sneha K.",
        rating: 5,
        text: "Ordered a custom 3D cake for my son's birthday. The detailing was out of this world. Highly recommend!",
        date: "1 week ago"
    },
    {
        name: "Rohan M.",
        rating: 5,
        text: "Love the eggless options. The brownies are so fudgy you wouldn't believe they're egg-free.",
        date: "3 weeks ago"
    }
];

export function GoogleReviews() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
                            <span className="text-neon-purple text-glow">Google</span> Reviews
                        </h2>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-white font-bold text-xl">4.9</span>
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <span className="text-gray-400 text-sm">(120+ Reviews)</span>
                        </div>
                    </div>
                    <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-bold transition-colors border border-white/10">
                        Write a Review
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-dark-card p-6 rounded-xl border border-white/10 relative"
                        >
                            <div className="absolute top-6 right-6">
                                <Image src="/google-g-logo.svg" alt="Google" width={20} height={20} className="opacity-50" />
                                {/* Note: Ensure logo exists or use text/icon backup if not available. Using generic text for now is safer if asset missing */}
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center text-white font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                                    <p className="text-xs text-gray-500">{review.date}</p>
                                </div>
                            </div>

                            <div className="flex text-yellow-400 mb-3 text-xs">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                &quot;{review.text}&quot;
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
