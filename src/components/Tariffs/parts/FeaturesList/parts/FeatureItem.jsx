import clsx from 'clsx'

const FeatureItem = ({ data: { feature, level } }) => {
	return (
		<li className='flex items-center gap-[8px]'>
			<span
				className={clsx(
					'rounded-[50%] w-[20px] h-[20px]',
					level === 'advanced' ? 'bg-[#0c0117]' : 'bg-[#ffffff]'
				)}
			></span>
			<span
				className={clsx(
					'font-semibold text-[16px] uppercase max-w-[230px]',
					level === 'advanced' ? 'text-[#0c0117]' : 'text-[#ffffff]'
				)}
			>
				{feature}
			</span>
		</li>
	)
}

export default FeatureItem
