const Image = () => {
	return (
		<picture>
			<source
				media='(min-width: 1280px)'
				srcSet='/hero/desktop@1x.png 1x, /hero/desktop@2x.png 2x'
			/>

			<img
				src='/hero/phone@1x.png'
				srcSet='/hero/phone@1x.png 1x, /hero/phone@2x.png 2x,'
				alt='Aleko Sokurashvili'
				loading='lazy'
			/>
		</picture>
	)
}

export default Image
