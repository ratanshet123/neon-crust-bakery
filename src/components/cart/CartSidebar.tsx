"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function CartSidebar() {
    const { items, isOpen, toggleCart, updateQuantity, removeFromCart, cartTotal } = useCart();
    const router = useRouter();

    const handleCheckout = () => {
        toggleCart();
        router.push("/order");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-dark-card border-l border-white/10 z-50 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
                            <h2 className="text-xl font-bold font-heading flex items-center gap-2">
                                <ShoppingBag className="text-neon-pink" />
                                Your Cart
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="text-center py-20 opacity-50">
                                    <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                                    <p>Your cart is empty.</p>
                                    <Button
                                        variant="ghost"
                                        className="mt-4"
                                        onClick={toggleCart}
                                    >
                                        Continue Shopping
                                    </Button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={item.productId}
                                        className="flex gap-4 bg-white/5 p-3 rounded-xl border border-white/5"
                                    >
                                        <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-black/50">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-sm line-clamp-1">{item.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.productId)}
                                                    className="text-gray-500 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <p className="text-neon-cyan text-sm font-mono">₹{item.price}</p>

                                            <div className="flex items-center gap-3 bg-black/30 w-fit px-2 py-1 rounded-lg mt-2">
                                                <button
                                                    onClick={() => updateQuantity(item.productId, -1)}
                                                    className="hover:text-neon-pink transition-colors"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </button>
                                                <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.productId, 1)}
                                                    className="hover:text-neon-green-400 transition-colors"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-black/40">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-400">Total</span>
                                    <span className="text-2xl font-bold text-white">₹{cartTotal}</span>
                                </div>
                                <Button
                                    onClick={handleCheckout}
                                    className="w-full justify-between group"
                                    glow
                                    variant="primary"
                                >
                                    Proceed to Order
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
