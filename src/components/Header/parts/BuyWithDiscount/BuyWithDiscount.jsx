import clsx from 'clsx'
import { useModalFormContext } from '../../../../context/useModalFormContext/useModalFormContext'

const BuyWithDiscount = ({ styles }) => {
	const {setIsModalFormOpen} = useModalFormContext()
	return (
		<button
			className={clsx(
				'font-semibold text-[12px] leading-[1.17] h-[40px] min-w-[190px] px-[40px] rounded-[30px] gradient-bg-84',
				styles
			)}
			type='button'
			onClick={() => setIsModalFormOpen(true)}
		>
			Купить со скидкой
		</button>
	)
}

export default BuyWithDiscount
