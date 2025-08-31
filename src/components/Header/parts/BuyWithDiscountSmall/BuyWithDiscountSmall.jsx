'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import clsx from 'clsx'
import Link from 'next/link'

const BuyWithDiscountSmall = ({ styles }) => {
	const { t } = useClientTranslation()
	return (
		<Link
			className={clsx(
				'flex justify-center items-center font-semibold text-[12px] leading-[1.17] h-[40px] min-w-[190px] px-[40px] rounded-[30px] gradient-bg-84',
				styles
			)}
			scroll={true}
			aria-label={t('buyWithDiscount')}
			href='#tariffs'
		>
			{t('buyWithDiscount')}
		</Link>
	)
}

export default BuyWithDiscountSmall
