'use client'

import { useState } from 'react'

const languages = ['RU', 'EN']

const LanguageSwitcher = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [lang, setLang] = useState('RU')

	const toggleDropdown = () => setIsOpen(!isOpen)
	const selectLang = selected => {
		setLang(selected)
		setIsOpen(false)
	}

	return (
		<div className='relative inline-block'>
			<button
				className='flex gap-[9px] items-center font-bold text-[14px] leading-[1.43] md:text-[16px] hover:text-[#5bdbfd] transition-colors duration-[250ms]'
				type='button'
				onClick={toggleDropdown}
				aria-label='кнопка переключения языка страницы'
			>
				{lang}
				<svg width={16} height={16}>
					<use href='/sprite/sprite.svg#icon-arrow-down'></use>
				</svg>
			</button>

			{isOpen && (
				<ul className='absolute top-[25px] left-0 mt-[10px] w-[80px] bg-[#1d0931] rounded z-[10]'>
					{languages.map((language, index) => (
						<li
							key={index}
							className='px-3 py-2 hover:bg-[#155668] cursor-pointer transition linear duration-[250ms]'
							onClick={() => selectLang(language)}
						>
							{language}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default LanguageSwitcher
