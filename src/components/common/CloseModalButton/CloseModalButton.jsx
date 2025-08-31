'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import clsx from 'clsx'

const CloseModalButton = ({ styles, setIsModalOpen }) => {
	const { t } = useClientTranslation()

	return (
		<button
			className={clsx('absolute', styles)}
			type='button'
			onClick={() => setIsModalOpen(false)}
			aria-label={t('closeButton')}
		>
			<svg
				className='fill-white stroke-white hover:stroke-[#5bdbfd] hover:fill-[#5bdbfd] transition linear duration-[250ms]'
				width={32}
				height={32}
			>
				<use href='/sprite/sprite.svg#icon-close-btn'></use>
			</svg>
		</button>
	)
}

export default CloseModalButton
