import { Manrope, Raleway } from 'next/font/google'
import '../styles/globals.css'
import localFont from 'next/font/local'
import { Toaster } from 'react-hot-toast'

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

export const metadata = {
	title: 'Aleko Sokurashvili',
	description: 'Portfolio site',
	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body
				className={`${manrope.variable} ${raleway.variable} ${sansation.variable} antialiased`}
			>
				<Toaster position='top-left' />
				<main>{children}</main>
			</body>
		</html>
	)
}
