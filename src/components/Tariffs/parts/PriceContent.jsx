import LineThrough from '@/components/common/LineThrough/LineThrough'
import clsx from 'clsx'

const PriceContent = ({ level, data: { discounted, original } }) => {
	return (
		<div
			className={clsx(
				'flex justify-between items-end font-manrope font-bold mb-[29px]',
				level === 'advanced' ? 'text-[#0c0117]' : 'text-[#ffffff]'
			)}
		>
			<span className='text-[64px] leading-none'>{discounted} $</span>
			<span className='text-[20px] relative'>
				{original} $
				<LineThrough
					styles={
						level === 'advanced'
							? 'w-[120%] bg-[#0c0117]'
							: 'w-[120%] bg-[#ffffff]'
					}
				/>
			</span>
		</div>
	)
}

export default PriceContent
