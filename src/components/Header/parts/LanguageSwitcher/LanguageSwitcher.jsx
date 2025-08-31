import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ActionButton from './parts/ActionButton'
import LanguagesList from './parts/LanguagesList'
import LanguageSwitcherFallback from './parts/LanguageSwitcherFallback'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const languages = [
		{ code: 'ru', name: 'RU' },
		{ code: 'en', name: 'EN' },
	]

	if (!mounted) {
		return <LanguageSwitcherFallback />
	}

	return (
		<div className='relative inline-block'>
			<ActionButton
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				languages={languages}
				i18n={i18n}
			/>

			{isOpen && (
				<LanguagesList
					languages={languages}
					i18n={i18n}
					setIsOpen={setIsOpen}
				/>
			)}
		</div>
	)
}

export default LanguageSwitcher
