import clsx from 'clsx'

const LineThrough = ({ styles }) => {
	return (
		<span
			className={clsx(
				'absolute h-[2px] top-1/2 left-1/2 -translate-x-1/2',
				styles
			)}
		></span>
	)
}

export default LineThrough
