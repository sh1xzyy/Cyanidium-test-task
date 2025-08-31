'use client'

import Container from '@/components/common/Container/Container'
import Hero from '@/components/Hero/Hero'
import PromoBanner from '@/components/PromoBanner/PromoBanner'
import Tariffs from '@/components/Tariffs/Tariffs'
import BaseModal from '../components/common/BaseModal/BaseModal'
import ModalFormContent from '../components/ModalFormContent/ModalFormContent'
import { useModalFormContext } from '../context/useModalFormContext/useModalFormContext'
import useWindowWidth from '../hooks/windowWidth/useWindowWidth'
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu'

const Home = () => {
	const { isModalFormOpen, setIsModalFormOpen } = useModalFormContext()
	const { windowWidth } = useWindowWidth()
	return (
		<>
			{isModalFormOpen && windowWidth >= 1280 && (
				<BaseModal setIsModalOpen={setIsModalFormOpen}>
					<ModalFormContent />
				</BaseModal>
			)}

			{isModalFormOpen && windowWidth < 1280 && (
				<BurgerMenu
					setIsBurgerMenuOpen={setIsModalFormOpen}
					styles='pt-[157px] pb-[41px]'
				>
					<ModalFormContent />
				</BurgerMenu>
			)}

			<section className='pt-[12px] pb-[66px] md:pt-[33px] md:pb-[100px]'>
				<Container>
					<Hero />
				</Container>
			</section>

			<section className='pt-[66px] pb-[38px] md:py-[100px]'>
				<Container>
					<Tariffs />
				</Container>
			</section>

			<section className='pt-[38px] pb-[48px] md:pt-[100px] md:pb-[59px]'>
				<PromoBanner />
			</section>
		</>
	)
}
export default Home
