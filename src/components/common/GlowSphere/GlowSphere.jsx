import clsx from 'clsx'

const GlowSphere = ({ styles }) => {
	return (
		<div
			className={clsx(
				`
        absolute 
        w-[184px] 
        h-[173px] 
        rounded-full 
        blur-[120px] 
        opacity-60 
        pointer-events-none
        overflow-x-hidden
      `,
				styles
			)}
		></div>
	)
}

export default GlowSphere
