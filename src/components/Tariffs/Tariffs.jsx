import { useSelector } from 'react-redux'
import TariffsList from './parts/TariffsList'
import useGetCards from '@/features/cards/useGetCards'
import { selectIsLoading } from '@/redux/cards/selectors'
import Loader from '../common/Loader/Loader'

const Tariffs = () => {
	const isLoading = useSelector(selectIsLoading)

	useGetCards()

	if (isLoading) {
		return <Loader />
	}

	return (
		<>
			<h2 className='mb-[28px] font-bold text-[24px] text-center uppercase md:text-[48px] md:mb-[79px]'>
				Тарифы
			</h2>
			<TariffsList />
		</>
	)
}

export default Tariffs
