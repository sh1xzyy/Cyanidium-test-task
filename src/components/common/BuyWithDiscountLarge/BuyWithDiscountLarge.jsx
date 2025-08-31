'use client'

import { useModalFormContext } from '@/context/useModalFormContext/useModalFormContext'
import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import clsx from 'clsx'

const BuyWithDiscountLarge = ({ buttonStyles, discountStyles, discount }) => {
	const { setIsModalFormOpen } = useModalFormContext()
	const { t } = useClientTranslation()

	return (
		<div className='relative group'>
			<button
				className={clsx(
					'min-w-[313px] px-[93px] font-semibold text-[14px] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)] transition linear duration-[250ms] leading-[1.54] xl:text-[22px] xl:leading-[1.67] xl:h-[74px] xl:min-w-[534px] xl:rounded-[60px]',
					buttonStyles
				)}
				type='button'
				onClick={() => setIsModalFormOpen(true)}
				aria-label={t('buyWithDiscount')}
			>
				{t('buyWithDiscount')}
			</button>
			<div
				className={clsx(
					'flex justify-center items-center pointer-events-none absolute top-0 right-0 rounded-full bg-[#ff4a77] transition linear duration-[250ms] group-hover:bg-[#7c1d35] xl:w-[74px] xl:h-[74px]',
					discountStyles
				)}
			>
				<span className='font-semibold text-[20px] leading-[1.28] md:text-[24px] md:leading-[1.54]'>
					{discount}
				</span>
			</div>
		</div>
	)
}

export default BuyWithDiscountLarge
