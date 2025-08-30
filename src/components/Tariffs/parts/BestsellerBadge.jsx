const BestsellerBadge = ({ isBestSeller }) => {
	return (
		<>
			{isBestSeller && (
				<div className='flex justify-center items-center absolute -top-[20px] left-1/2 -translate-x-1/2 rounded-[18px] shadow-custom gradient-bg-121 h-[42px] min-w-[169px]'>
					<span className='font-bold text-[16px] uppercase'>Best seller</span>
				</div>
			)}
		</>
	)
}

export default BestsellerBadge
