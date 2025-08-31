import clsx from 'clsx'
import Link from 'next/link'

const BuyWithDiscountSmall = ({ styles }) => {
	return (
		<Link
			className={clsx(
				'flex justify-center items-center font-semibold text-[12px] leading-[1.17] h-[40px] min-w-[190px] px-[40px] rounded-[30px] gradient-bg-84',
				styles
			)}
			scroll={true}
			aria-label='купить со скидкой'
			href='#tariffs'
		>
			Купить со скидкой
		</Link>
	)
}

export default BuyWithDiscountSmall
