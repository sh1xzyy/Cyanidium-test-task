'use client'

import { useSelector } from 'react-redux'
import TariffsList from './parts/TariffsList'
import useGetCards from '@/features/cards/useGetCards'
import { selectIsLoading } from '@/redux/cards/selectors'
import Loader from '../common/Loader/Loader'
import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'

const Tariffs = () => {
	const isLoading = useSelector(selectIsLoading)
	const { t } = useClientTranslation()
	useGetCards()

	return (
		<>
			{isLoading && <Loader />}
			<h2 className='mb-[28px] font-bold text-[24px] text-center uppercase md:text-[48px] md:mb-[79px]'>
				{t('pricing')}
			</h2>
			<TariffsList />
		</>
	)
}

export default Tariffs
