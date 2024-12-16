import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            scale: {
                "101": "1.01",
                "102": "1.02",
                "103": "1.03",
            }
        },
    },
    plugins: []
} satisfies Config;
