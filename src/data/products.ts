export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: "cakes" | "pastries" | "breads" | "cookies";
    rating: number;
    isBestSeller?: boolean;
    isNew?: boolean;
    tags: string[];
}

export const products: Product[] = [
    {
        id: "1",
        name: "Cyberpunk Velvet",
        price: 850,
        description: "A glitch in the matrix of flavor. Vibrant red velvet sponge layered with bio-luminescent cream cheese frosting. Experience the anomaly.",
        image: "https://images.unsplash.com/photo-1586788680434-30d324636205?w=800&q=80",
        category: "cakes",
        rating: 4.9,
        isBestSeller: true,
        tags: ["Signature", "Eggless"]
    },
    {
        id: "2",
        name: "Dark Matter Truffle",
        price: 950,
        description: "Density critical. 70% dark Belgian chocolate ganache infused with espresso nebulas. Absorbs light, emits pure joy.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
        category: "cakes",
        rating: 4.8,
        tags: ["Rich", "Premium"]
    },
    {
        id: "3",
        name: "Neon Glaze Donut",
        price: 120,
        description: "Toroidal perfection. Fried dough accelerator ring coated in an irradiating blueberry-lavender glaze. Zero gravity texture.",
        image: "https://images.unsplash.com/photo-1551024601-564d6d67e211?w=800&q=80",
        category: "pastries",
        rating: 4.7,
        isNew: true,
        tags: ["Sweet", "Glazed"]
    },
    {
        id: "4",
        name: "Plasma Berry Tart",
        price: 180,
        description: "Containment field stable. A butter-crust vessel holding unstable fruit plasma (fresh berry compote) and vanilla custard.",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80",
        category: "pastries",
        rating: 4.6,
        tags: ["Fruit", "Tart"]
    },
    {
        id: "5",
        name: "Quantum Croissant",
        price: 150,
        description: "Multiverse layering. 27 microscopic butter layers folded in the 4th dimension for maximum flake velocity.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4039a0a6?w=800&q=80",
        category: "breads",
        rating: 4.9,
        isBestSeller: true,
        tags: ["Buttery", "Classic"]
    },
    {
        id: "6",
        name: "Byte-Sized Brownies",
        price: 300,
        description: "Data packets of fudge. Walnut-encrypted chocolate blocks essential for your daily download. System reboot guaranteed.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
        category: "cookies",
        rating: 4.5,
        tags: ["Fudgy", "Pack of 6"]
    },
    {
        id: "7",
        name: "Holographic Macarons",
        price: 450,
        description: "Prismatic shell, soft core. Assorted flavors (Pistachio, Raspberry, Lemon) that phase shift on your palate.",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80",
        category: "cookies",
        rating: 4.8,
        isNew: true,
        tags: ["Colorful", "Gift Box"]
    },
    {
        id: "8",
        name: "Sourdough Mainframe",
        price: 250,
        description: "Fermented algorithm. Wild yeast culture cultivated since 2020. Crust integrity: 100%. Crumb structure: Optimized.",
        image: "https://images.unsplash.com/photo-1585476263060-65522d8026b8?w=800&q=80",
        category: "breads",
        rating: 4.7,
        tags: ["Artisan", "Healthy"]
    },
    {
        id: "9",
        name: "Tiramisu Upload",
        price: 220,
        description: "Cloud storage for coffee lovers. Espresso-soaked ladyfingers layered with mascarpone bandwidth.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
        category: "pastries",
        rating: 4.8,
        tags: ["Coffee", "Creamy"]
    },
    {
        id: "10",
        name: "Vanilla Void Cake",
        price: 750,
        description: "Pure white spectrum. Vanilla bean galaxy infused sponge that defies gravity with its lightness.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
        category: "cakes",
        rating: 4.6,
        tags: ["Classic", "Eggless"]
    },
    {
        id: "11",
        name: "Binary Chip Cookies",
        price: 180,
        description: "0s and 1s of flavor. Sea salt and dark chocolate chunks encoded into a chewy brown butter substrate.",
        image: "https://images.unsplash.com/photo-1499636138143-bd630f5cf38b?w=800&q=80",
        category: "cookies",
        rating: 4.7,
        tags: ["Chewy", "Chocochip"]
    },
    {
        id: "12",
        name: "Fusion Garlic Loaf",
        price: 140,
        description: "Nuclear bonding of garlic and herbs. Pull-apart cheese bread that radiates savory energy.",
        image: "https://images.unsplash.com/photo-1573140247632-f84660f67627?w=800&q=80",
        category: "breads",
        rating: 4.8,
        isBestSeller: true,
        tags: ["Savory", "Cheesy"]
    }
];
