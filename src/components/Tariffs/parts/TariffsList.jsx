import TariffsCard from './TariffsCard'

const cards = [
	{
		level: 'base',
		isBestSeller: false,
		price: {
			original: 139,
			discounted: 99,
		},
		features: ['базовый курс', '38 уроков'],
	},
	{
		level: 'advanced',
		isBestSeller: true,
		price: {
			original: 199,
			discounted: 149,
		},
		features: [
			'база',
			'дополнительные уроки',
			'48 уроков',
			'чат-комьюнити для создателей контента',
		],
	},
	{
		level: 'expert',
		isBestSeller: false,
		price: {
			original: 500,
			discounted: 299,
		},
		features: [
			'дополнительные уроки',
			'48 уроков',
			'чат-комьюнити для создателей контента',
			'Разбор вашей страницы в формате видеозвонка',
		],
	},
]

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
