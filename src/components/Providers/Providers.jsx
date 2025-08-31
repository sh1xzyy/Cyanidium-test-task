'use client'

import { Provider } from 'react-redux'
import store from '@/redux/store'
import { Toaster } from 'react-hot-toast'
import Header from '../Header/Header'
import AppProvider from '@/context/AppProvider'

export default function Providers({ children }) {
	return (
		<Provider store={store}>
			<AppProvider>
				<Toaster position='top-left' />
				<Header />
				<main className='xl:pt-[113px]'>{children}</main>
			</AppProvider>
		</Provider>
	)
}
