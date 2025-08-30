import clsx from 'clsx'
import Level from './parts/Level'
import Title from './parts/Title'

const CardsHeader = ({ level }) => {
	return (
		<div
			className={clsx(
				'mb-[36px]',
				level !== 'base' && 'flex justify-between items-center'
			)}
		>
			<Title level={level} />

			<Level level={level} />
		</div>
	)
}

export default CardsHeader
