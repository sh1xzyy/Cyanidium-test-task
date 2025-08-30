const Container = ({ children }) => {
	return (
		<div className='container mx-auto px-[40px] md:px-[80px] max-w-7xl'>
			{children}
		</div>
	)
}

export default Container
