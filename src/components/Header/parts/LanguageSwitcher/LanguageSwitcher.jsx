'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const [mounted, setMounted] = useState(false)
	const { t } = useClientTranslation()

	useEffect(() => {
		setMounted(true)
	}, [])

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleLanguageChange = newLocale => {
		i18n.changeLanguage(newLocale)
		setIsOpen(false)
	}

	const languages = [
		{ code: 'ru', name: 'RU' },
		{ code: 'en', name: 'EN' },
	]

	if (!mounted) {
		return (
			<div className='relative inline-block'>
				<button
					className='flex gap-[9px] items-center font-bold text-[14px] leading-[1.43] md:text-[16px]'
					aria-label={t('languageSwitchButton')}
				>
					RU
					<svg width={16} height={16}>
						<use href='/sprite/sprite.svg#icon-arrow-down'></use>
					</svg>
				</button>
			</div>
		)
	}

	const currentLang =
		languages.find(lang => lang.code === i18n.language)?.name || 'RU'

	return (
		<div className='relative inline-block'>
			<button
				className='flex gap-[9px] items-center font-bold text-[14px] leading-[1.43] md:text-[16px] hover:text-[#5bdbfd] focus:text-[#5bdbfd] transition-colors duration-[250ms]'
				type='button'
				onClick={toggleDropdown}
				aria-label={t('languageSwitchButton')}
			>
				{currentLang}
				<svg width={16} height={16}>
					<use href='/sprite/sprite.svg#icon-arrow-down'></use>
				</svg>
			</button>

			{isOpen && (
				<ul className='absolute top-[25px] left-0 mt-[10px] w-[80px] bg-[#1d0931] rounded z-[10]'>
					{languages.map(language => (
						<li
							key={language.code}
							className='px-3 py-2 hover:bg-[#155668] cursor-pointer transition linear duration-[250ms]'
							onClick={() => handleLanguageChange(language.code)}
						>
							{language.name}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default LanguageSwitcher
