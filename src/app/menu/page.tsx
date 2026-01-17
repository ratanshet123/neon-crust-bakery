import { MenuGrid } from "@/components/menu/MenuGrid";

export default function MenuPage() {
    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="bg-dark-bg/80 pt-32 pb-12 px-4 border-b border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink mb-6">
                        Digital Menu
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Browse our selection of cyber-enhanced baked goods.
                        Filter by category or search for your favorite flavor protocol.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <MenuGrid />
            </div>
        </div>
    );
}
