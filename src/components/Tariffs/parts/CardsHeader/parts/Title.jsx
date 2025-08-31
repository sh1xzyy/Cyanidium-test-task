'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import clsx from 'clsx'

const Title = ({ level }) => {
	const { t } = useClientTranslation()
	return (
		<h3
			className={clsx(
				'font-bold text-[16px] uppercase',
				level === 'advanced' ? 'text-[#0c0117]' : 'text-[#ffffff]'
			)}
		>
			{level === 'base' && t('basic')}
			{level === 'advanced' && t('advanced')}
			{level === 'expert' && t('expert')}
		</h3>
	)
}

export default Title
