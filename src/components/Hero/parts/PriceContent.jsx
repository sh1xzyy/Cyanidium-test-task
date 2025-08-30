const PriceContent = () => {
	return (
		<div className='flex items-center gap-[9px] mt-[11px] xl:gap-[16px]'>
			<span className='font-semibold text-[20px] tracking-[1.08] text-[#ff4a77] xl:text-[24px] xl:tracking-[1.54]'>
				1000 грн
			</span>
			<span className='relative font-semibold text-[14px] tracking-[1.54] text-[#c5c5c5]'>
				2000 грн
				<span className='absolute bg-[#c5c5c5] h-[1px] w-[110%] top-1/2 -translate-y-1/2 -left-[3px]'></span>
			</span>
		</div>
	)
}

export default PriceContent
