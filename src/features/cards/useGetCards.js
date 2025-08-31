import { getCardsThunk } from '@/redux/cards/operations'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCards = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCardsThunk())
	}, [dispatch])
}

export default useGetCards
