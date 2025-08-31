'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'

const LanguageSwitcherFallback = () => {
	const { t } = useClientTranslation()

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

export default LanguageSwitcherFallback
