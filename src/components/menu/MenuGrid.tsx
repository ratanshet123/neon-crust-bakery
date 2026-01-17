"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product, products } from "@/data/products";
import { ProductCard } from "@/components/menu/ProductCard";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = ["All", "Cakes", "Pastries", "Cookies", "Breads", "Specials"];

export function MenuGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "rating">("rating");

    const filteredProducts = useMemo(() => {
        let filtered = products;

        // Category Filter
        if (activeCategory !== "All") {
            filtered = filtered.filter(p => p.category === activeCategory);
        }

        // Search Filter
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q)
            );
        }

        // Sorting
        return [...filtered].sort((a, b) => {
            if (sortBy === "price-asc") return a.price - b.price;
            if (sortBy === "price-desc") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            return 0;
        });
    }, [activeCategory, searchQuery, sortBy]);

    return (
        <div className="space-y-8">
            {/* Controls Header */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-dark-card/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm sticky top-24 z-30">

                {/* Search */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search neon treats..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:shadow-[0_0_15px_rgba(255,0,255,0.2)] transition-all"
                    />
                </div>

                {/* Sort */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="flex items-center gap-2 text-gray-400 text-sm whitespace-nowrap">
                        <Filter className="h-4 w-4" /> Sort by:
                    </div>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-cyan"
                    >
                        <option value="rating">Rating (High to Low)</option>
                        <option value="price-asc">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                    </select>
                </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === category
                                ? "bg-neon-pink text-white shadow-[0_0_15px_rgba(255,0,255,0.4)]"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence>
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">No futuristic items found matching your criteria.</p>
                    <Button
                        variant="ghost"
                        onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                        className="mt-4"
                    >
                        Reset Filters
                    </Button>
                </div>
            )}
        </div>
    );
}
