import FeatureItem from './parts/FeatureItem'

const FeaturesList = ({ features, level }) => {
	return (
		<div>
			<ul className='flex flex-col gap-[14px]'>
				{features.map((feature, index) => (
					<FeatureItem key={index} data={{ feature, level }} />
				))}
			</ul>
		</div>
	)
}

export default FeaturesList
