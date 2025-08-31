import { Manrope, Raleway } from 'next/font/google'
import localFont from 'next/font/local'

export const manrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	weight: '400',
	variable: '--font-manrope',
})

export const raleway = Raleway({
	subsets: ['latin', 'cyrillic'],
	weight: '400',
	variable: '--font-raleway',
})

export const sansation = localFont({
	src: [
		{ path: '../assets/fonts/Sansation-Light.ttf', weight: '300' },
		{ path: '../assets/fonts/Sansation-Regular.ttf', weight: '400' },
		{ path: '../assets/fonts/Sansation-Bold.ttf', weight: '700' },
	],
	variable: '--font-sansation',
	display: 'swap',
})
