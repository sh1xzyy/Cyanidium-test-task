'use client'

import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import { useRouter } from 'next/navigation'

const NotFound = () => {
	const { t } = useClientTranslation()
	const router = useRouter()

	return (
		<div className='flex justify-center items-center flex-col h-[80vh] bg-[#0c0117]'>
			<span className='text-white text-6xl sm:text-8xl font-bold mb-4'>
				404
			</span>
			<p className='text-white mb-5 text-center max-w-[240px] sm:max-w-full text-lg'>
				{t('errorTitle')}
			</p>

			<button
				onClick={() => router.back()}
				className='gradient-bg-84 h-[50px] min-w-[140px] text-white font-medium px-[10px] rounded transition-colors duration-200'
			>
				{t('errorButton')}
			</button>
		</div>
	)
}

export default NotFound
