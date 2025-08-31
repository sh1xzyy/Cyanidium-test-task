import { PulseLoader } from 'react-spinners'

const Loader = () => {
	return (
		<div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000]'>
			<PulseLoader color='#ff4a77' size={16} />
		</div>
	)
}

export default Loader
