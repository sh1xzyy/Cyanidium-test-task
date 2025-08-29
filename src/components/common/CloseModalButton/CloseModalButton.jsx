const CloseModalButton = ({ setIsModalOpen }) => {
	return (
		<button
			className='absolute top-[32px] right-[22px]'
			type='button'
			onClick={() => setIsModalOpen(false)}
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
