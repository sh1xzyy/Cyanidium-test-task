import clsx from 'clsx'
import ActionButton from './ActionButton'
import PriceContent from './PriceContent'
import FeaturesList from './FeaturesList/FeaturesList'
import BestsellerBadge from './BestsellerBadge'
import CardsHeader from './CardsHeader/CardsHeader'

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
				'relative flex flex-col justify-between py-[31px] px-[24px] w-full rounded-[28px] min-h-[430px] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)] md:px-[36px] md:pt-[36px] md:pb-[26px] xl:max-w-[360px]',
				level === 'advanced' && 'bg-[#ffffff]',
				level === 'expert' && 'gradient-bg-121'
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
