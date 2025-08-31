'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import clsx from 'clsx'

const TextContent = () => {
	const { t } = useClientTranslation()
	return (
		<>
			<div className='-mt-[92px] mb-[32px] xl:absolute xl:right-[12px] xl:-bottom-[132px] xl:mb-0 xl:min-w-[534px] 2xl:-left-[113px] '>
				<h2
					className={clsx(
						'font-bold text-[20px] mb-[4px] xl:text-[32px] xl:mb-[15px]',
						'gradient-text-151'
					)}
				>
					{t('fromZeroTo')}
				</h2>
				<h1 className='font-extrabold leading-[1.13] text-[54px] uppercase max-w-[313px] xl:text-[96px] xl:max-w-[570px]'>
					{t('viralSecrets')}
				</h1>
			</div>
			<div className='b-[44px] xl:mt-[84px] xl:mb-0'>
				<p className='font-normal text-[14px] max-w-[320px] xl:max-w-[396px] xl:text-[18px]'>
					{t('slogan')}
				</p>
			</div>
		</>
	)
}

export default TextContent
