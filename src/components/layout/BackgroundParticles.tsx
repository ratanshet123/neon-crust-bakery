"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
    id: number;
    x: number;
    y: number;
    opacity: number;
    scale: number;
    duration: number;
};

type Blob = {
    id: number;
    x: number;
    y: number;
    duration: number;
};

export function BackgroundParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [blobs, setBlobs] = useState<Blob[]>([]);

    useEffect(() => {
        // Hydration safe random generation
        const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
        const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;

        const newParticles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * windowWidth,
            y: Math.random() * windowHeight,
            opacity: 0.1 + Math.random() * 0.3,
            scale: 0.5 + Math.random() * 0.5,
            duration: 10 + Math.random() * 20,
        }));

        const newBlobs = Array.from({ length: 3 }).map((_, i) => ({
            id: i,
            x: Math.random() * windowWidth,
            y: Math.random() * windowHeight,
            duration: 20 + Math.random() * 10,
        }));

        setParticles(newParticles);
        setBlobs(newBlobs);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Soft Ambient Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.5, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[120px]"
            />

            {/* Floating Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{
                        x: p.x,
                        y: p.y,
                        opacity: p.opacity,
                        scale: p.scale,
                    }}
                    animate={{
                        y: [p.y, p.y - 100],
                        opacity: [p.opacity, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]"
                />
            ))}

            {/* Glowing Blobs */}
            {blobs.map((b) => (
                <motion.div
                    key={`blob-${b.id}`}
                    initial={{
                        x: b.x,
                        y: b.y,
                    }}
                    animate={{
                        x: [b.x, b.x + (Math.random() * 200 - 100)],
                        y: [b.y, b.y + (Math.random() * 200 - 100)],
                    }}
                    transition={{
                        duration: b.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={`absolute w-32 h-32 rounded-full blur-[60px] opacity-20 ${b.id % 2 === 0 ? 'bg-neon-pink' : 'bg-neon-cyan'}`}
                />
            ))}
        </div>
    );
}
