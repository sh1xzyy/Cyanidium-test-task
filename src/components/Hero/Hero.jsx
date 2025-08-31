import Image from './parts/Image'
import TextContent from './parts/TextContent'
import PriceContent from './parts/PriceContent'
import BuyWithDiscountLarge from '../common/BuyWithDiscountLarge/BuyWithDiscountLarge'

const Hero = () => {
	return (
		<>
			<div className='grid justify-center xl:grid-cols-[644px_1fr] xl:gap-x-[40px] xl:gap-y-[42px]'>
				<Image />

				<div className='text-center mb-[44px] xl:text-left xl:mb-0 relative'>
					<TextContent />
				</div>

				<div className='inline-flex flex-col items-center w-fit'>
					<div className='xl:self-start'>
						<BuyWithDiscountLarge
							buttonStyles='h-[60px] rounded-[30px] bg-[#ffffff] text-[#000000]'
							discountStyles='w-[60px] h-[60px]'
							discount='-50%'
						/>
					</div>
					<PriceContent />
				</div>
			</div>
		</>
	)
}

export default Hero
