import clsx from 'clsx'

const TextContent = () => {
	return (
		<>
			<div className='-mt-[92px] mb-[32px] xl:absolute xl:right-[12px] xl:-bottom-[132px] xl:mb-0 2xl:-left-[113px]'>
				<h2
					className={clsx(
						'font-bold text-[20px] mb-[4px] xl:text-[32px] xl:mb-[15px]',
						'gradient-text'
					)}
				>
					От 0 до 100,000 за 90 дней
				</h2>
				<h1 className='font-extrabold leading-[1.13] text-[54px] uppercase max-w-[313px] xl:text-[96px] xl:max-w-[570px]'>
					Секреты Вирусных Видео
				</h1>
			</div>
			<div className='b-[44px] xl:mt-[84px] xl:mb-0'>
				<p className='font-normal text-[14px] max-w-[320px] xl:max-w-[396px] xl:text-[18px]'>
					Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
					ключ к созданию вирусного контента и превратите свои идеи в миллионные
					просмотры.
				</p>
			</div>
		</>
	)
}

export default TextContent
