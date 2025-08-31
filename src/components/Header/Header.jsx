'use client'

import Link from 'next/link'
import { logo } from './commonStyles/commonStyles'
import Container from '../common/Container/Container'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import useWindowWidth from '@/hooks/windowWidth/useWindowWidth'
import NavList from './parts/NavList/NavList'
import LanguageSwitcher from './parts/LanguageSwitcher/LanguageSwitcher'
import BurgerMenuButton from './parts/BurgerMenuButton/BurgerMenuButton'
import BuyWithDiscount from './parts/BuyWithDiscount/BuyWithDiscount'
import { useBurgerMenuOpenContext } from '@/context/useBurgerMenuOpenContext/useBurgerMenuOpenContext'

const Header = () => {
	const { isBurgerMenuOpen, setIsBurgerMenuOpen } = useBurgerMenuOpenContext()
	const { windowWidth } = useWindowWidth()

	return (
		<>
			{isBurgerMenuOpen && (
				<BurgerMenu setIsBurgerMenuOpen={setIsBurgerMenuOpen}>
					<NavList
						listStyles='flex-col gap-[20px]'
						type='burgerMenu'
						setIsBurgerMenuOpen={setIsBurgerMenuOpen}
					/>
					<BuyWithDiscount styles='mt-[25px]' />
				</BurgerMenu>
			)}
			<Container>
				<header className='flex justify-between items-center gap-[27.8px] pt-[51px] pb-[12px] md:pt-[40px] md:pb-[33px]'>
					<Link href='/' className={logo}>
						<span>Aleko </span>
						<span className='gradient-text-84'>Sokurashvili</span>
					</Link>

					<div className='flex gap-[60px]'>
						{windowWidth >= 1280 && <NavList listStyles='gap-[28px]' />}

						<div className='flex items-center gap-[27px] xl:gap-[60px]'>
							<LanguageSwitcher />

							{windowWidth < 1280 ? (
								<BurgerMenuButton setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
							) : (
								<BuyWithDiscount />
							)}
						</div>
					</div>
				</header>
			</Container>
		</>
	)
}

export default Header
