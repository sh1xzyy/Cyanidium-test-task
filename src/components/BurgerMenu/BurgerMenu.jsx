import clsx from 'clsx'
import CloseModalButton from '../common/CloseModalButton/CloseModalButton'
import GlowSphere from '../common/GlowSphere/GlowSphere'

const BurgerMenu = ({ setIsBurgerMenuOpen, children, styles }) => {
	return (
		<div
			className={clsx(
				'flex justify-center flex-col items-center fixed bg-[#0c0117] w-full h-full top-1/2 left-1/2 -translate-1/2 z-[10000]',
				styles
			)}
		>
			<GlowSphere styles='w-[184px] h-[173px] blur-[120px] -left-[110px] top-[30vh] bg-[#13b8ff]' />
			<GlowSphere styles='w-[184px] h-[173px] blur-[120px] right-0 translate-x-1/2 bottom-0 bg-[#a75df3]' />

			<CloseModalButton
				styles='top-[32px] right-[22px]'
				setIsModalOpen={setIsBurgerMenuOpen}
			/>

			{children}
		</div>
	)
}

export default BurgerMenu
