import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                fg: "#000000",
                bg: "#ffffff",
            },
            fontFamily: {
                bigRiver: ["Big River", "sans-serif"],
                satoshi: ["Satoshi-Variable", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
