'use client'

import Container from '@/components/common/Container/Container'
import Hero from '@/components/Hero/Hero'
import PromoBanner from '@/components/PromoBanner/PromoBanner'
import Tariffs from '@/components/Tariffs/Tariffs'
import BaseModal from '../components/common/BaseModal/BaseModal'
import ModalFormContent from '../components/ModalFormContent/ModalFormContent'
import { useModalFormContext } from '../context/useModalFormContext/useModalFormContext'
import useWindowWidth from '../hooks/windowWidth/useWindowWidth'
import GlowSphere from '@/components/common/GlowSphere/GlowSphere'
import BurgerMenu from '@/components/common/BurgerMenu/BurgerMenu'

const Home = () => {
	const { isModalFormOpen, setIsModalFormOpen } = useModalFormContext()
	const { windowWidth } = useWindowWidth()

	return (
		<>
			{isModalFormOpen && windowWidth >= 1280 && (
				<BaseModal
					isModalOpen={isModalFormOpen}
					setIsModalOpen={setIsModalFormOpen}
				>
					<ModalFormContent />
				</BaseModal>
			)}

			{isModalFormOpen && windowWidth < 1280 && (
				<BurgerMenu
					isBurgerMenuOpen={isModalFormOpen}
					setIsBurgerMenuOpen={setIsModalFormOpen}
					styles='pt-[157px] pb-[41px]'
				>
					<ModalFormContent />
				</BurgerMenu>
			)}

			{windowWidth < 1280 ? (
				<>
					<GlowSphere styles='w-[184px] h-[173px] top-[10%] right-[20px] bg-[#a75df3] blur-[170px] ' />
					<GlowSphere styles='w-[184px] h-[173px] top-[55%] left-[20px] bg-[#13b8ff] blur-[170px] ' />
					<GlowSphere styles='w-[184px] h-[173px] top-[100%] right-[20px] bg-[#13b8ff] blur-[170px]' />
				</>
			) : (
				<GlowSphere styles='w-[368px] h-[346px] top-[100%] right-[20px] bg-[#a75df3] blur-[250px]' />
			)}

			<section className='pt-[12px] pb-[66px] md:pt-[33px] md:pb-[100px]'>
				<Container>
					<Hero />
				</Container>
			</section>

			<section className='pt-[66px] pb-[38px] md:py-[100px]' id='tariffs'>
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
