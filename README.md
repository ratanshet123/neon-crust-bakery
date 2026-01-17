# NeonCrust Bakery

A premium, futuristic bakery website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Futuristic Design**: Neon glow aesthetics, glassmorphism, and smooth animations.
- **Dynamic Menu**: Filtering, searching, and sorting for products.
- **Interactive Gallery**: Masonry layout with lightbox view.
- **Order System**: Complex order form generating WhatsApp messages.
- **SEO Optimized**: JSON-LD Schema, Sitemap, and Metadata.
- **Responsive**: Fully optimized for mobile and desktop.

## getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Folder Structure

- `src/app`: App Router pages and layout.
- `src/components`: UI components organized by feature (home, menu, gallery, etc.).
- `src/data`: Static data for products and site configuration.
- `src/lib`: Utility functions.

## Customization

- **Site Info**: Edit `src/data/site.ts` to change brand details.
- **Products**: Edit `src/data/products.ts` to manage inventory.
- **Theme**: Adjust colors in `tailwind.config.ts`.

## Deployment

Deploy easily to Vercel:

1. Push to GitHub.
2. Import project in Vercel.
3. Deploy (automatic detection of Next.js).
