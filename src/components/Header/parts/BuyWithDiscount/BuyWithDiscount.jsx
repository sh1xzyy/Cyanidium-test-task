import clsx from 'clsx'

const BuyWithDiscount = ({ styles }) => {
	return (
		<button
			className={clsx(
				'font-semibold text-[12px] leading-[1.17] h-[40px] min-w-[190px] px-[40px] rounded-[30px] gradient-bg-84',
				styles
			)}
			type='button'
		>
			Купить со скидкой
		</button>
	)
}

export default BuyWithDiscount
