import clsx from 'clsx'

const BuyWithDiscount = ({ styles }) => {
	return (
		<button
			className={clsx(
				'font-semibold text-[12px] leading-[1.17] h-[40px] min-w-[190px] px-[40px] rounded-[30px]',
				styles
			)}
			type='button'
			style={{
				backgroundImage:
					'linear-gradient(84deg, #5bdbfd, #7375ff, #df93ff, #e56f8c)',
				backgroundSize: '200% 100%',
			}}
		>
			Купить со скидкой
		</button>
	)
}

export default BuyWithDiscount
