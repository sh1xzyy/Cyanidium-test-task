import clsx from 'clsx'

const BuyWithDiscountButton = ({ buttonStyles, discountStyles, discount }) => {
	return (
		<div className='relative'>
			<button
				className={clsx(
					'min-w-[313px] px-[93px] font-semibold text-[14px] shadow-buttonCustom leading-[1.54] xl:text-[22px] xl:leading-[1.67] xl:h-[74px] xl:min-w-[534px] xl:rounded-[60px]',
					buttonStyles
				)}
				type='button'
			>
				Купить со скидкой
			</button>
			<div
				className={clsx(
					'flex justify-center items-center pointer-events-none absolute top-0 right-0 rounded-full bg-[#ff4a77] xl:w-[74px] xl:h-[74px]',
					discountStyles
				)}
			>
				<span className='font-semibold text-[20px] leading-[1.28] md:text-[24px] md:leading-[1.54]'>
					{discount}
				</span>
			</div>
		</div>
	)
}

export default BuyWithDiscountButton
