import LineThrough from '@/components/common/LineThrough/LineThrough'
import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'

const PriceContent = () => {
	const { t } = useClientTranslation()

	return (
		<div className='flex items-center gap-[9px] mt-[11px] xl:gap-[16px]'>
			<span className='font-semibold text-[20px] leading-[1.08] text-[#ff4a77] xl:text-[24px] xl:leading-[1.54]'>
				1000 {t('price')}
			</span>
			<span className='relative font-semibold text-[14px] leading-[1.54] text-[#c5c5c5]'>
				2000 {t('price')}
				<LineThrough styles='w-[110%] bg-[#c5c5c5]' />
			</span>
		</div>
	)
}

export default PriceContent
