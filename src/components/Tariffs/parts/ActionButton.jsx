import clsx from 'clsx'

const ActionButton = ({ level }) => {
	return (
		<button
			className={clsx(
				'rounded-[52px] px-[16px] min-w-[248px] h-[47px] font-semibold text-[14px] border border-transparent transition linear duration-[250ms]',
				level === 'base'
					? 'text-[#0c0117] bg-[#ffffff] hover:bg-[#0c0117] hover:text-[#ffffff] hover:border-[#ffffff]'
					: 'text-[#ffffff] bg-[#0c0117] hover:bg-[#ffffff] hover:text-[#0c0117] hover:border-[#0c0117]',
				level === 'advanced' && 'mt-[35px]',
				level === 'expert' && 'mt-[22px] '
			)}
			type='button'
		>
			Купить
		</button>
	)
}

export default ActionButton
