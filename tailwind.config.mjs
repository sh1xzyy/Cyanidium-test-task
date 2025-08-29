/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['var(--font-manrope)', 'sans-serif'],
				raleway: ['var(--font-raleway)', 'sans-serif'],
				sansation: ['var(--font-sansation)', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

export default config
