"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

// Mock images (using placeholder gradients/colors if actual images aren't dynamic, or reusable product images)
// In a real app, this would fetch from Insta API. using product images for demo.
const instaImages = [
    "/products/cake1.jpg",
    "/products/cupcake1.jpg",
    "/products/donut1.jpg",
    "/products/croissant1.jpg",
    "/products/cake2.jpg",
    "/products/macaron1.jpg",
];

export function InstagramStrip() {
    return (
        <section className="py-20 border-t border-white/5">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-heading font-bold text-white mb-2">Follow us on Instagram</h2>
                <Link href={siteConfig.instagram} target="_blank" className="text-neon-pink hover:text-white transition-colors inline-flex items-center gap-2">
                    <Instagram className="h-5 w-5" /> @neoncrustbakery
                </Link>
            </div>

            <div className="w-full overflow-hidden flex">
                {/* Simple marquee effect */}
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex min-w-full"
                >
                    {[...instaImages, ...instaImages].map((src, idx) => (
                        <div key={idx} className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0 group cursor-pointer border-r border-white/10">
                            <Image
                                src={`https://images.unsplash.com/photo-${(idx % 2 === 0) ? '1586788680434-30d324636205' : '1551024601-564d6d67e211'}?w=400&q=80`}
                                alt="Instagram post"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                <Instagram className="text-white h-8 w-8" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
