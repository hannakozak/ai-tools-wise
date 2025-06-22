/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // Enable class-based dark mode
	content: [
		'./src/app/**/*.{ts,tsx,js,jsx,mdx}',
		'./src/components/**/*.{ts,tsx,js,jsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
