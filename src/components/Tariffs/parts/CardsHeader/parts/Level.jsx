import clsx from 'clsx'

const Level = ({ level }) => {
	return (
		<>
			{level !== 'base' && (
				<div
					className={clsx(
						'flex justify-center items-center rounded-[30px] h-[42px]  px-[10px]',
						level === 'advanced'
							? 'bg-[#0c0117] min-w-[100px]'
							: 'bg-[#ffffff] min-w-[119px]'
					)}
				>
					{level === 'advanced' ? (
						<span className='font-bold text-[16px] uppercase gradient-text-121'>
							pro
						</span>
					) : (
						<span className='font-bold text-[16px] uppercase gradient-text-121'>
							expert
						</span>
					)}
				</div>
			)}
		</>
	)
}

export default Level
