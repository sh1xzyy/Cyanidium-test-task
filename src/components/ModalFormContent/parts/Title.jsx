'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'

const Title = () => {
	const { t } = useClientTranslation()

	return (
		<h3 className='font-bold text-[24px] uppercase mb-[36px]'>
			{t('enterYourData')}
		</h3>
	)
}

export default Title
