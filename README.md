# ⚡ NeonCrust Bakery

![Vibe Coding](https://img.shields.io/badge/Built_with-Vibe_Coding-ff00ff?style=for-the-badge&logo=sparkles)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

> **"Baking at Light Speed"** 🚀

A futuristic, high-fidelity bakery experience designed for the next generation of dessert lovers. This project was built using **Vibe Coding** principles—prioritizing aesthetics, fluid motion, and energetic user experiences.

---

## 🛠️ Tech Stack

This project leverages the latest web technologies to deliver a premium, app-like feel on the web.

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Type Safety)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first, Dark Mode)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) (Complex Layout Animations, 3D Tilts)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Fonts**: Outfit (Google Fonts)
-   **State Management**: React Context (`CartContext` with persistence)

---

## ✨ Key Features

### 🎨 Visual Experience
-   **Glassmorphism UI**: Frosted glass effects, neon glows, and gradient borders.
-   **3D Interactions**: Product cards tilt and follow the mouse cursor.
-   **Dynamic Backgrounds**: Floating particles and pulsing ambient lights.
-   **Smooth Transitions**: Page-to-page transitions and scroll reveals.

### 🛒 Functional Commerce
-   **Smart Cart System**: Real-time cart updates, side drawer, and local storage persistence.
-   **WhatsApp Ordering**: "Initialize Order" generates a pre-filled WhatsApp message with the cart summary for direct checkout.
-   **Dynamic Menu**: Real-time searching, category filtering, and sorting (Price/Rating).

### ⚡ Performance & Conversion
-   **Image Optimization**: Full usage of `next/image` with blur-up skeletons.
-   **Conversion Elements**: Sticky mobile "Order Now" button, Time-limited banners.
-   **SEO Ready**: JSON-LD Structured Data, Semantic HTML, and Dynamic Metadata.

---

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ratanshet123/neon-crust-bakery.git
    cd neon-crust-bakery
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open locally:**
    Navigate to `http://localhost:3000` to see the site live.

---

## 📂 Project Structure

```bash
src/
├── app/                # Next.js App Router Pages
│   ├── about/          # Brand Story
│   ├── gallery/        # Masonry Photo Grid
│   ├── menu/           # Product Catalog
│   ├── order/          # Checkout Form
│   ├── layout.tsx      # Root Layout (Providers, Navbar, Footer)
│   └── page.tsx        # Home Page
├── components/         # Reusable UI Components
│   ├── cart/           # Cart Sidebar & Logic
│   ├── home/           # Landing Page Sections
│   ├── menu/           # Product Cards & Filters
│   └── ui/             # Primitives (Buttons, Skeleton, etc.)
├── context/            # React Context (Cart State)
├── data/               # Static Data (Products, Site Config)
└── lib/                # Utilities
```

---

## 🖤 Vibe Coding Philosophy

This project wasn't just *coded*; it was *vibed*.
-   **Flow over Force**: Development followed a natural, iterative rhythm.
-   **Aesthetics First**: Every pixel was polished to glow.
-   **User-Centric**: Built to wow the user from the first load.

---


