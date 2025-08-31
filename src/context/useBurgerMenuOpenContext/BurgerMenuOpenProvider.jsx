'use client'

import { useState } from 'react'
import { BurgerMenuOpenContext } from './useBurgerMenuOpenContext'

const BurgerMenuOpenProvider = ({ children }) => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

	return (
		<BurgerMenuOpenContext.Provider
			value={{ isBurgerMenuOpen, setIsBurgerMenuOpen }}
		>
			{children}
		</BurgerMenuOpenContext.Provider>
	)
}

export default BurgerMenuOpenProvider
