export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: "Cakes" | "Pastries" | "Cookies" | "Breads" | "Specials" | "Custom";
    tags: string[];
    rating: number;
    image: string;
    isBestSeller?: boolean;
    isNew?: boolean;
};

export const products: Product[] = [
    {
        id: "1",
        name: "Cyberpunk Velvet Cake",
        description: "Red velvet with a neon twist, infused with blueberry essence.",
        price: 1200,
        category: "Cakes",
        tags: ["Signature", "Best Seller"],
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
        isBestSeller: true,
    },
    {
        id: "2",
        name: "Neon Glaze Donut",
        description: "Classic donut topped with glow-in-the-dark edible glaze.",
        price: 150,
        category: "Pastries",
        tags: ["New", "Sweet"],
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
        isNew: true,
    },
    {
        id: "3",
        name: "Matrix Matcha Mousse",
        description: "Green tea mousse that hacks your taste buds.",
        price: 350,
        category: "Pastries",
        tags: ["Healthy-ish", "Green"],
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1577003833619-76bbd7ec500d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "4",
        name: "Quantum Croissant",
        description: "Buttery layers existing in multiple flavor states until bitten.",
        price: 180,
        category: "Breads",
        tags: ["Breakfast", "Classic"],
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4039a0b5?auto=format&fit=crop&q=80&w=800",
        isBestSeller: true,
    },
    {
        id: "5",
        name: "Holonut Brownie",
        description: "Fudgy brownie with holographic edible glitter.",
        price: 200,
        category: "Cookies",
        tags: ["Chocolate", "Rich"],
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "6",
        name: "Galactic Sourdough",
        description: "Naturally leavened bread with a dark crust and airy crumb.",
        price: 400,
        category: "Breads",
        tags: ["Artisan", "Vegan"],
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1585478479636-66927d337f75?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "7",
        name: "Synthwave Cupcakes",
        description: "Pack of 4 cupcakes with retro-wave colors.",
        price: 450,
        category: "Cakes",
        tags: ["Party", "Colorful"],
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&q=80&w=800",
        isNew: true,
    },
    {
        id: "8",
        name: "Digital Dark Forest",
        description: "Black forest cake upgraded with digital cherries.",
        price: 1100,
        category: "Cakes",
        tags: ["Chocolate", "Cream"],
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "9",
        name: "Binary Biscotti",
        description: "Crunchy almond biscuits, perfect for coding sessions.",
        price: 250,
        category: "Cookies",
        tags: ["Crunchy", "Nuts"],
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "10",
        name: "Flux Capacitart",
        description: "Lemon tart that takes you back in time.",
        price: 220,
        category: "Pastries",
        tags: ["Citrus", "Tangy"],
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800",
    },
    // Add more items to reach >24 as requested
    { id: "11", name: "Plasma Pretzels", category: "Specials", price: 120, description: "Salty soft pretzels", image: "https://images.unsplash.com/photo-1595604928543-9799ae2d1264?auto=format&fit=crop&q=80&w=800", rating: 4.5, tags: ["Salty"] },
    { id: "12", name: "Nebula Macarons", category: "Cookies", price: 600, description: "Assorted galactic flavors", image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800", rating: 4.9, tags: ["Best Seller", "Gift"], isBestSeller: true },
    { id: "13", name: "Void Cookies", category: "Cookies", price: 180, description: "Dark chocolate charcoal cookies", image: "https://images.unsplash.com/photo-1618335835639-66c30e5272a9?auto=format&fit=crop&q=80&w=800", rating: 4.7, tags: ["Dark"] },
    { id: "14", name: "Aurora Bagel", category: "Breads", price: 100, description: "Rainbow bagel with cream cheese", image: "https://images.unsplash.com/photo-1639667851375-4704c316c3f8?auto=format&fit=crop&q=80&w=800", rating: 4.3, tags: ["Breakfast"] },
    { id: "15", name: "Future Fruit Tart", category: "Pastries", price: 280, description: "Exotic fruits on custard", image: "https://images.unsplash.com/photo-1565257922756-12c8ff615456?auto=format&fit=crop&q=80&w=800", rating: 4.6, tags: ["Fruity"] },
    { id: "16", name: "Tech Tiramisu", category: "Cakes", price: 1300, description: "Coffee layered perfection", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800", rating: 4.8, tags: ["Coffee", "Classic"] },
    { id: "17", name: "Laser Lemon Loaf", category: "Cakes", price: 350, description: "Zesty lemon pound cake", image: "https://images.unsplash.com/photo-1534308983496-c7fb744a6185?auto=format&fit=crop&q=80&w=800", rating: 4.5, tags: ["Tea Time"] },
    { id: "18", name: "Glitch Gingerbread", category: "Cookies", price: 150, description: "Spiced cookies for any season", image: "https://images.unsplash.com/photo-1607920700204-766324d7732e?auto=format&fit=crop&q=80&w=800", rating: 4.4, tags: ["Spice"] },
    { id: "19", name: "Robot Red Velvet Cookies", category: "Cookies", price: 200, description: "Chewy red velvet", image: "https://images.unsplash.com/photo-1621236378699-8597f740be95?auto=format&fit=crop&q=80&w=800", rating: 4.6, tags: ["Sweet"] },
    { id: "20", name: "Steampunk Scones", category: "Pastries", price: 120, description: "Buttery scones with raisins", image: "https://images.unsplash.com/photo-1582265936710-53bc42c75a40?auto=format&fit=crop&q=80&w=800", rating: 4.3, tags: ["British"] },
    { id: "21", name: "Cyber Cannoli", category: "Pastries", price: 180, description: "Ricotta filled crispy shells", image: "https://images.unsplash.com/photo-1551529834-525807d6b4f3?auto=format&fit=crop&q=80&w=800", rating: 4.7, tags: ["Italian"] },
    { id: "22", name: "Pixel Pie", category: "Specials", price: 500, description: "Apple pie with pixel crust art", image: "https://images.unsplash.com/photo-1572383672419-2f4404786d3d?auto=format&fit=crop&q=80&w=800", rating: 4.8, tags: ["Family Size"] },
    { id: "23", name: "Megabyte Muffin", category: "Breads", price: 90, description: "Blueberry giant muffin", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&q=80&w=800", rating: 4.5, tags: ["Breakfast"] },
    { id: "24", name: "Data Danishes", category: "Pastries", price: 160, description: "Fruit filled pastry pockets", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800", rating: 4.6, tags: ["Fruity"] },
];
