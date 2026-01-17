import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple mb-6">
                        Establish Uplink
                    </h1>
                    <p className="text-xl text-gray-400">
                        Visit our base or send a digital transmission.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Info & Map */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: MapPin, title: "Coordinates", text: siteConfig.address },
                                { icon: Phone, title: "Comms", text: siteConfig.phone },
                                { icon: Mail, title: "Digital Mail", text: siteConfig.email },
                                { icon: Clock, title: "Active Hours", text: siteConfig.timings },
                            ].map((item, i) => (
                                <div key={i} className="bg-dark-card p-6 rounded-xl border border-white/5 flex flex-col items-center text-center hover:border-neon-cyan/30 transition-colors">
                                    <item.icon className="h-8 w-8 text-neon-cyan mb-4" />
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Map Embed */}
                        <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.815214040938!2d77.58557999999999!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705658760000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <ContactForm />

                </div>
            </div>
        </div>
    );
}
