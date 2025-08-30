import clsx from "clsx"

const CloseModalButton = ({styles, setIsModalOpen }) => {
	return (
		<button
			className={clsx('absolute', styles)}
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
