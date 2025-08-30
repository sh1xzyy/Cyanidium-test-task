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
			boxShadow: {
				custom: '0 4px 16px 1px rgba(0, 0, 0, 0.25)',
				buttonCustom: 'inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)',
			},
		},
	},
	plugins: [],
}

export default config
