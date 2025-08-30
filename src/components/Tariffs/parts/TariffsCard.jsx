import clsx from 'clsx'
import ActionButton from './ActionButton'
import PriceContent from './PriceContent'
import CardsHeader from './CardsHeader'
import FeaturesList from './FeaturesList/FeaturesList'
import BestsellerBadge from './BestsellerBadge'

const TariffsCard = ({
	data: {
		level,
		isBestSeller,
		price: { original, discounted },
		features,
	},
}) => {
	return (
		<div
			className={clsx(
				'relative flex flex-col justify-between py-[32px] px-[32px] w-full rounded-[28px] min-h-[430px] shadow-custom md:px-[36px] md:pt-[36px] md:pb-[26px] xl:max-w-[360px]',
				level === 'advanced' && 'bg-[#ffffff]',
				level === 'expert' && 'base-card-gradient'
			)}
		>
			<BestsellerBadge isBestSeller={isBestSeller} />

			<div>
				<CardsHeader level={level} />

				<PriceContent level={level} data={{ discounted, original }} />

				<FeaturesList level={level} features={features} />
			</div>

			<ActionButton level={level} />
		</div>
	)
}

export default TariffsCard
