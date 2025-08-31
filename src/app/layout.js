import '../styles/globals.css'
import Providers from '@/components/Providers/Providers'
import I18nProvider from '@/components/I18nProvider/I18nProvider'
import { manrope, raleway, sansation } from '@/lib/fonts'

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
				<Providers>
					<I18nProvider>{children}</I18nProvider>
				</Providers>
			</body>
		</html>
	)
}
