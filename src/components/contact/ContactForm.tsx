"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormState("success");
    };

    if (formState === "success") {
        return (
            <div className="bg-neon-cyan/10 border border-neon-cyan p-8 rounded-xl text-center text-neon-cyan">
                <h3 className="text-2xl font-bold mb-2">Message Transmitted!</h3>
                <p>We will respond to your frequency shortly.</p>
                <Button onClick={() => setFormState("idle")} variant="outline" className="mt-4" glow>
                    Send Another
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-dark-card p-8 rounded-2xl border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-gray-300 text-sm">Codename (Name)</label>
                    <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-gray-300 text-sm">Frequency (Email)</label>
                    <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-gray-300 text-sm">Message Data</label>
                <textarea required rows={5} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors" />
            </div>

            <Button
                type="submit"
                glow
                className="w-full"
                disabled={formState === "submitting"}
            >
                {formState === "submitting" ? "Transmitting..." : "Send Transmission"}
            </Button>
        </form>
    );
}
