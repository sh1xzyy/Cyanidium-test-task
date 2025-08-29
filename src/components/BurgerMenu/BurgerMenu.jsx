import CloseModalButton from '../common/CloseModalButton/CloseModalButton'
import GlowSphere from '../common/GlowSphere/GlowSphere'
import BuyWithDiscount from '../Header/parts/BuyWithDiscount/BuyWithDiscount'
import NavList from '../Header/parts/NavList/NavList'

const BurgerMenu = ({ setIsBurgerMenuOpen }) => {
	return (
		<div className='flex justify-center flex-col items-center absolute bg-[#0c0117] w-full h-full top-0 left-0 z-[10000]'>
			<GlowSphere
				styles='-left-[110px]
        top-[30vh] bg-[#13b8ff]'
			/>
			<GlowSphere
				styles='right-0 translate-x-1/2
        bottom-[8vh] bg-[#a75df3]'
			/>

			<CloseModalButton setIsModalOpen={setIsBurgerMenuOpen} />

			<NavList
				listStyles='flex-col gap-[20px]'
				type='burgerMenu'
				setIsBurgerMenuOpen={setIsBurgerMenuOpen}
			/>
			<BuyWithDiscount styles='mt-[25px]' />
		</div>
	)
}

export default BurgerMenu
