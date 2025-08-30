const RightBlur = () => {
	return (
		<>
			<div className='absolute bottom-[95px] -right-[650px] flex justify-center items-center -rotate-[45deg] w-full gradient-bg-121 h-[97px] blur-[3px]'>
				<span className='font-sansation font-bold text-[34px] uppercase'>
					Секреты вирусных видео
				</span>
			</div>

			<div className='absolute top-0 right-0 w-[25%] h-full gradient-right-blur -z-[1]'></div>
		</>
	)
}

export default RightBlur
