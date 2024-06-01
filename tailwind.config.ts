import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		extend: {
			colors: {
				// border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",

				brandPrimary: "#FF1400",
				brandSecondary: "#414A50",
				brandPrimaryLs1: "#FF3726",
				brandPrimaryLs2: "#FF6A5D",
				brandPrimaryLs3: "#FFB8B1",
				brandPrimaryLs4: "#FFEDEB",
				brandPrimaryDs: "#E71200",
				brandColorLs1: "#4F5961",
				brandColorDs1: "#313639",
				textPrimary: "#1C1C1C",
				textSecondary: "#282828",
				textTertiary: "#5A5A5A",
				bgPrimary: "#5A5A5A",
				bgSecondary: "#FFFFFF",
				grayPrimary: "#EBEBEB",
				link: "#0096FF",
				success: "#43B276",
				danger: "#EC2027",
				warning: "#F1C425",

				// primary: "#E92429",
				// primaryShade: "#DF343A",
				// hoverPrimary: "#6D0E16",
				// textPrimary: "#252525",
				// textSecondary: "#5C5C5C",
				// textLight: "#7B7B7B",

				// primary: {
				// 	DEFAULT: "hsl(var(--primary))",
				// 	foreground: "hsl(var(--primary-foreground))",
				// },
				// secondary: {
				// 	DEFAULT: "hsl(var(--secondary))",
				// 	foreground: "hsl(var(--secondary-foreground))",
				// },
				// destructive: {
				// 	DEFAULT: "hsl(var(--destructive))",
				// 	foreground: "hsl(var(--destructive-foreground))",
				// },
				// muted: {
				// 	DEFAULT: "hsl(var(--muted))",
				// 	foreground: "hsl(var(--muted-foreground))",
				// },
				// accent: {
				// 	DEFAULT: "hsl(var(--accent))",
				// 	foreground: "hsl(var(--accent-foreground))",
				// },
				// popover: {
				// 	DEFAULT: "hsl(var(--popover))",
				// 	foreground: "hsl(var(--popover-foreground))",
				// },
				// card: {
				// 	DEFAULT: "hsl(var(--card))",
				// 	foreground: "hsl(var(--card-foreground))",
				// },
			},
			// borderRadius: {
			// 	lg: "var(--radius)",
			// 	md: "calc(var(--radius) - 2px)",
			// 	sm: "calc(var(--radius) - 4px)",
			// },
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
