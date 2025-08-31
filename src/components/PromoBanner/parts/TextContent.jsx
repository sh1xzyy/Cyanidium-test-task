'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'

const TextContent = () => {
	const { t } = useClientTranslation()

	return (
		<div className='text-center w-full max-w-[320px] md:max-w-[490px]'>
			<h2 className='font-bold text-[20px] uppercase leading-[1.17] mb-[20px] md:text-[36px]'>
				{t('learnToCreate1')}
				<br /> {t('learnToCreate2')}
				<br />
				&nbsp;
				<span className='gradient-text-84'>{t('learnToCreate3')}</span>
			</h2>
			<h3 className='font-medium text-[14px] leading-[1.17] md:text-[24px]'>
				{t('viralMaterials')}
			</h3>
		</div>
	)
}

export default TextContent
