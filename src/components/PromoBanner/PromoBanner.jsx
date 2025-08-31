'use client'

import TextContent from './parts/TextContent'
import BuyWithDiscountLarge from '../common/BuyWithDiscountLarge/BuyWithDiscountLarge'
import GlowSphere from '../common/GlowSphere/GlowSphere'
import useWindowWidth from '@/hooks/windowWidth/useWindowWidth'
import RightBlur from './parts/RightBlur'
import Image from './parts/Image'

const PromoBanner = () => {
	const { windowWidth } = useWindowWidth()
	return (
		<div className='relative flex flex-col items-center gap-[62px] gradient-border-y-84 py-[113px] md:pt-[60px] md:pb-[108px] md:gap-[44px] overflow-hidden'>
			{windowWidth >= 1280 ? (
				<Image />
			) : (
				<>
					<GlowSphere styles='w-[184px] h-[173px] blur-[100px] top-0 left-0 bg-[#a75df3]' />
					<GlowSphere styles='w-[184px] h-[173px] blur-[100px] right-0 bottom-0 bg-[#13b8ff]' />
				</>
			)}

			<TextContent />
			<BuyWithDiscountLarge
				buttonStyles='h-[68px] rounded-[40px] gradient-bg-121 shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)]'
				discountStyles='w-[63px] h-[68px]'
				discount='-50%'
			/>

			{windowWidth >= 1280 && <RightBlur />}
		</div>
	)
}

export default PromoBanner
