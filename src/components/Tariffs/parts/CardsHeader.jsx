import clsx from 'clsx'

const CardsHeader = ({ level }) => {
	return (
		<div
			className={clsx(
				'mb-[36px]',
				level !== 'base' && 'flex justify-between items-center'
			)}
		>
			<h3
				className={clsx(
					'font-bold text-[16px] uppercase',
					level === 'advanced' ? 'text-[#0c0117]' : 'text-[#ffffff]'
				)}
			>
				{level === 'base'
					? 'Базовый'
					: level === 'advanced'
					? 'Продвинутий'
					: level === 'expert'
					? 'ЭКСПЕРТ'
					: null}
			</h3>

			{level !== 'base' && (
				<div
					className={clsx(
						'flex justify-center items-center rounded-[30px] h-[42px] min-w-[100px] px-[33px]',
						level === 'advanced' ? 'bg-[#0c0117]' : 'bg-[#ffffff]'
					)}
				>
					{level === 'advanced' ? (
						<span
							className={clsx(
								'font-bold text-[16px] uppercase',
								'gradient-text-121'
							)}
						>
							pro
						</span>
					) : (
						<span
							className={clsx(
								'font-bold text-[16px] uppercase',
								'gradient-text-121'
							)}
						>
							expert
						</span>
					)}
				</div>
			)}
		</div>
	)
}

export default CardsHeader
