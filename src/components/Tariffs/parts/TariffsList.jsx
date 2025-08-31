import { useSelector } from 'react-redux'
import TariffsCard from './TariffsCard'
import { selectCardsData } from '@/redux/cards/selectors'

const TariffsList = () => {
	const cards = useSelector(selectCardsData)

	return (
		<ul className='grid justify-center gap-[26px] lg:grid-cols-2 md:gap-[20px] xl:grid-cols-3'>
			{cards?.map((data, index) => (
				<TariffsCard key={index} data={data} />
			))}
		</ul>
	)
}

export default TariffsList
