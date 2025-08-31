'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const useClientTranslation = () => {
	const [mounted, setMounted] = useState(false)
	const { t, i18n } = useTranslation()

	useEffect(() => {
		setMounted(true)
	}, [])

	return { t: mounted ? t : () => '', i18n, mounted }
}
