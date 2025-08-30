import Container from '@/components/common/Container/Container'
import Hero from '@/components/Hero/Hero'
import PromoBanner from '@/components/PromoBanner/PromoBanner'
import Tariffs from '@/components/Tariffs/Tariffs'

const Home = () => {
	return (
		<>
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
