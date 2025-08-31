'use client'

import { createContext, useContext } from 'react'

export const BurgerMenuOpenContext = createContext()
export const useBurgerMenuOpenContext = () => useContext(BurgerMenuOpenContext)
