import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import FeatureItem from './parts/FeatureItem'

const FeaturesList = ({ features, level }) => {
	const { t } = useClientTranslation()
	return (
		<div>
			<ul className='flex flex-col gap-[14px]'>
				{features.map((feature, index) => (
					<FeatureItem
						key={index}
						data={{ feature: t(`courses.features.${feature}`), level }}
					/>
				))}
			</ul>
		</div>
	)
}

export default FeaturesList
