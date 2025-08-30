const BuyWithDiscountButton = ({ discount }) => {
	return (
		<div className='relative'>
			<button
				className='h-[60px] min-w-[313px] bg-[#fff] [#fff] shadow-[inset_4px_6px_11px_4px_rgba(167,93,243,0.2)] rounded-[30px] px-[93px] font-semibold text-[14px] tracking-[1.54] text-[#000] xl:text-[22px] xl:tracking-[1.67] xl:h-[74px] xl:min-w-[534px] xl:rounded-[60px]'
				type='button'
			>
				Купить со скидкой
			</button>
			<div className='flex justify-center items-center absolute top-0 right-0 rounded-full w-[60px] h-[60px] bg-[#ff4a77] xl:w-[74px] xl:h-[74px]'>
				<span className='font-semibold text-[24px] tracking-[1.54]'>
					{discount}
				</span>
			</div>
		</div>
	)
}

export default BuyWithDiscountButton
