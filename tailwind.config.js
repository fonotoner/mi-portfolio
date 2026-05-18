/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'pulse-fade-in': 'pulse-fade-in 1s ease-in-out forwards',
			},
			keyframes: {
				'pulse-fade-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'50%': { opacity: '1' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animated"),
	],
}