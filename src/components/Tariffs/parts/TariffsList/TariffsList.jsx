import TariffsCard from '../TariffsCard'
import { cards } from './cards'

const TariffsList = () => {
	return (
		<ul className='grid justify-center gap-[26px] lg:grid-cols-2 md:gap-[20px] xl:grid-cols-3'>
			{cards.map((data, index) => (
				<TariffsCard key={index} data={data} />
			))}
		</ul>
	)
}

export default TariffsList
