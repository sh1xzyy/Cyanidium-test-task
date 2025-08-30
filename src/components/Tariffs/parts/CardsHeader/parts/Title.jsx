import clsx from 'clsx'

const Title = ({ level }) => {
	return (
		<h3
			className={clsx(
				'font-bold text-[16px] uppercase',
				level === 'advanced' ? 'text-[#0c0117]' : 'text-[#ffffff]'
			)}
		>
			{level === 'base' && 'Базовый'}
			{level === 'advanced' && 'Продвинутий'}
			{level === 'expert' && 'ЭКСПЕРТ'}
		</h3>
	)
}

export default Title
