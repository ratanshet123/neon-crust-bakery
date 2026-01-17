"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 w-full bg-dark-bg/80 backdrop-blur-md border-t border-white/10 p-4 md:hidden z-40"
                >
                    <Link href="/order" className="block w-full">
                        <button className="w-full bg-neon-cyan text-black font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.4)] flex items-center justify-center gap-2">
                            Order Now <ShoppingBag className="h-5 w-5" />
                        </button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
