/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export const darkMode = 'class';
export const content = [
	'./src/app/**/*.{ts,tsx,js,jsx,mdx}',
	'./src/components/**/*.{ts,tsx,js,jsx,mdx}',
];
export const theme = {
	extend: {},
};
export const plugins = [typography];
