const BurgerMenuButton = ({ setIsBurgerMenuOpen }) => {
	return (
		<button
			className='group'
			type='button'
			onClick={() => setIsBurgerMenuOpen(true)}
			aria-label='кнопка открытия бургер меню'
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
