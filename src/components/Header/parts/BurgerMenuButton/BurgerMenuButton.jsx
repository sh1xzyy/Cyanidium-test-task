'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'

const BurgerMenuButton = ({ setIsBurgerMenuOpen }) => {
	const { t } = useClientTranslation()

	return (
		<button
			className='group'
			type='button'
			onClick={() => setIsBurgerMenuOpen(true)}
			aria-label={t('burgerOpenButton')}
		>
			<svg
				className='group-hover:text-[#5bdbfd] transition linear duration-[250ms]'
				width={35}
				height={35}
			>
				<use href='/sprite/sprite.svg#icon-burger-menu'></use>
			</svg>
		</button>
	)
}

export default BurgerMenuButton
