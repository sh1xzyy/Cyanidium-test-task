/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	corePlugins: {
		preflight: true,
	},
	theme: {
		extend: {
			fontFamily: {
				manrope: ['var(--font-manrope)', 'sans-serif'],
				raleway: ['var(--font-raleway)', 'sans-serif'],
				sansation: ['var(--font-sansation)', 'sans-serif'],
			},
			keyframes: {
				appearance: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
}

export default config
