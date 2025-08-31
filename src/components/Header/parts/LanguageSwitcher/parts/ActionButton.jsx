'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'

const ActionButton = ({ isOpen, setIsOpen, languages, i18n }) => {
	const { t } = useClientTranslation()

	const currentLang =
		languages.find(lang => lang.code === i18n.language)?.name || 'RU'

	return (
		<button
			className='flex gap-[9px] items-center font-bold text-[14px] leading-[1.43] md:text-[16px] hover:text-[#5bdbfd] focus:text-[#5bdbfd] transition-colors duration-[250ms]'
			type='button'
			onClick={() => setIsOpen(!isOpen)}
			aria-label={t('languageSwitchButton')}
		>
			{currentLang}
			<svg width={16} height={16}>
				<use href='/sprite/sprite.svg#icon-arrow-down'></use>
			</svg>
		</button>
	)
}

export default ActionButton
