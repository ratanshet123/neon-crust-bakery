import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}", // Future proofing
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    pink: "#FF00FF",
                    cyan: "#00FFFF",
                    purple: "#BC13FE",
                    yellow: "#F9F871",
                },
                dark: {
                    bg: "#0A0A0A",
                    card: "#121212",
                    surface: "rgba(255, 255, 255, 0.05)",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-outfit)"],
            },
        },
    },
    plugins: [],
};
export default config;
