import { useEffect } from 'react'

const useLockBodyScroll = isModalOpen => {
	useEffect(() => {
		if (isModalOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		return () => document.body.classList.remove('overflow-hidden')
	}, [isModalOpen])
}

export default useLockBodyScroll
