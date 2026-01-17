import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-6">
                        Visual Gallery
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A glimpse into our neon-infused culinary universe.
                    </p>
                </div>

                <GalleryGrid />
            </div>
        </div>
    );
}
