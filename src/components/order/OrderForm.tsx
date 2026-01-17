"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { MessageCircle, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

type OrderItem = {
    productId: string;
    quantity: number;
};

export function OrderForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        type: "pickup" as "pickup" | "delivery",
        date: "",
        time: "",
        address: "",
        notes: "",
    });

    const [cart, setCart] = useState<OrderItem[]>([]);
    const [selectedProductId, setSelectedProductId] = useState("");

    const addToCart = () => {
        if (!selectedProductId) return;
        const existing = cart.find(item => item.productId === selectedProductId);
        if (existing) {
            setCart(cart.map(item => item.productId === selectedProductId ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCart([...cart, { productId: selectedProductId, quantity: 1 }]);
        }
        setSelectedProductId("");
    };

    const removeFromCart = (id: string) => {
        setCart(cart.filter(item => item.productId !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setCart(cart.map(item => {
            if (item.productId === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => {
            const product = products.find(p => p.id === item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }, [cart]);

    const generateWhatsAppLink = () => {
        const itemsList = cart.map(item => {
            const product = products.find(p => p.id === item.productId);
            return `- ${product?.name} x${item.quantity} (₹${product!.price * item.quantity})`;
        }).join("%0a");

        const message = `*New Order from Website*%0a` +
            `------------------%0a` +
            `*Name:* ${formData.name}%0a` +
            `*Phone:* ${formData.phone}%0a` +
            `*Type:* ${formData.type.toUpperCase()}%0a` +
            (formData.type === 'delivery' ? `*Address:* ${formData.address}%0a` : ``) +
            `*Date/Time:* ${formData.date} at ${formData.time}%0a` +
            `------------------%0a` +
            `*Items:*%0a${itemsList}%0a` +
            `------------------%0a` +
            `*Total: ₹${cartTotal}*` +
            (formData.notes ? `%0a------------------%0a*Notes:* ${formData.notes}` : ``);

        return `https://wa.me/${siteConfig.whatsapp}?text=${message}`;
    };

    const isValid = formData.name && formData.phone && formData.date && formData.time && cart.length > 0 && (formData.type === 'pickup' || formData.address);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6 bg-dark-card p-8 rounded-2xl border border-white/5"
            >
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Order Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm">Name</label>
                        <input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm">Phone</label>
                        <input value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan" />
                    </div>
                </div>

                <div className="flex gap-4 p-1 bg-black/40 rounded-lg border border-white/10">
                    {['pickup', 'delivery'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFormData({ ...formData, type: type as any })}
                            className={`flex-1 py-2 rounded-md font-bold text-sm transition-all ${formData.type === type
                                    ? "bg-neon-pink text-white shadow-[0_0_10px_rgba(255,0,255,0.3)]"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>

                {formData.type === 'delivery' && (
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm">Delivery Address</label>
                        <textarea value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan" rows={3} />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm">Date</label>
                        <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan [color-scheme:dark]" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm">Time</label>
                        <input type="time" value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan [color-scheme:dark]" />
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                    <label className="text-gray-400 text-sm block mb-2">Add Items</label>
                    <div className="flex gap-2">
                        <select
                            value={selectedProductId}
                            onChange={e => setSelectedProductId(e.target.value)}
                            className="flex-grow bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan"
                        >
                            <option value="">Select a product...</option>
                            {products.map(p => (
                                <option key={p.id} value={p.id}>{p.name} - ₹{p.price}</option>
                            ))}
                        </select>
                        <Button onClick={addToCart} disabled={!selectedProductId} variant="secondary">Add</Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-gray-400 text-sm">Special Notes</label>
                    <input value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan" placeholder="Allergies, custom text, etc." />
                </div>
            </motion.div>

            {/* Cart Summary */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-fit sticky top-24"
            >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <ShoppingBag className="text-neon-cyan" /> Order Summary
                </h3>

                {cart.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        <p>Your cart is empty.</p>
                        <p className="text-sm">Select items to proceed.</p>
                    </div>
                ) : (
                    <div className="space-y-4 mb-8">
                        {cart.map(item => {
                            const product = products.find(p => p.id === item.productId)!;
                            return (
                                <div key={item.productId} className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                                    <div className="flex-grow">
                                        <p className="font-bold text-white text-sm">{product.name}</p>
                                        <p className="text-neon-cyan text-xs">₹{product.price} x {item.quantity}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => updateQuantity(item.productId, -1)} className="text-gray-400 hover:text-white"><Minus className="h-4 w-4" /></button>
                                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.productId, 1)} className="text-gray-400 hover:text-white"><Plus className="h-4 w-4" /></button>
                                        <button onClick={() => removeFromCart(item.productId)} className="text-red-500 hover:text-red-400 ml-2"><Trash2 className="h-4 w-4" /></button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="border-t border-white/10 pt-4 mb-6">
                    <div className="flex justify-between items-center text-xl font-bold text-white">
                        <span>Total</span>
                        <span className="text-neon-pink text-glow">₹{cartTotal}</span>
                    </div>
                </div>

                <Button
                    className="w-full !py-4 text-lg"
                    glow
                    variant="primary"
                    disabled={!isValid}
                    onClick={() => window.open(generateWhatsAppLink(), '_blank')}
                >
                    <MessageCircle className="mr-2 h-5 w-5" /> Place Order via WhatsApp
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                    Order details will be pre-filled in your WhatsApp message.
                </p>
            </motion.div>
        </div>
    );
}
