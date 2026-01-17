"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <Link
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center"
                >
                    <MessageCircle className="h-6 w-6 fill-current" />
                </motion.button>
            </Link>

            {/* Directions Button */}
            <Link
                href={siteConfig.mapsLink || "https://maps.google.com"}
                target="_blank"
                rel="noopener noreferrer"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="bg-neon-purple text-white p-4 rounded-full shadow-[0_0_20px_rgba(188,19,254,0.4)] hover:shadow-[0_0_30px_rgba(188,19,254,0.6)] transition-all flex items-center justify-center"
                    title="Get Directions"
                >
                    <MapPin className="h-6 w-6" />
                </motion.button>
            </Link>

            {/* Phone Button */}
            <Link href={`tel:${siteConfig.phone}`}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-neon-cyan text-black p-4 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all flex items-center justify-center"
                >
                    <Phone className="h-6 w-6" />
                </motion.button>
            </Link>
        </div>
    );
}
