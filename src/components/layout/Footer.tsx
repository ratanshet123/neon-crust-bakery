import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-dark-card border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
                            {siteConfig.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {siteConfig.tagline}
                        </p>
                        <div className="flex space-x-4">
                            <Link href={siteConfig.instagram} className="text-gray-400 hover:text-neon-pink transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/menu" className="hover:text-neon-cyan transition-colors">Menu</Link></li>
                            <li><Link href="/gallery" className="hover:text-neon-cyan transition-colors">Gallery</Link></li>
                            <li><Link href="/order" className="hover:text-neon-cyan transition-colors">Order Online</Link></li>
                            <li><Link href="/about" className="hover:text-neon-cyan transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-neon-pink shrink-0" />
                                <span>{siteConfig.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-neon-cyan shrink-0" />
                                <span>{siteConfig.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-neon-purple shrink-0" />
                                <span>{siteConfig.email}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-neon-yellow shrink-0" />
                                <span>{siteConfig.timings}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">Get the latest neon treats straight to your inbox.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-neon-pink w-full"
                            />
                            <button className="bg-neon-pink text-white px-4 py-2 rounded-lg font-bold hover:bg-neon-pink/80 transition-colors">
                                →
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
