const Image = () => {
	return (
		<>
			<img
				className='absolute top-0 left-0 -z-[2]'
				src='/promoBanner/making-photo@1x.jpg'
				srcSet='/promoBanner/making-photo@1x.jpg 1x, /promoBanner/making-photo@2x.jpg 2x'
				alt='making photo'
				loading='lazy'
			/>
			<div className='absolute w-[712px] h-[1486px] rounded-[50%] top-1/2 left-[20%] -translate-y-1/2 bg-[#0c0117] -z-[2] blur-2xl'></div>
		</>
	)
}

export default Image
