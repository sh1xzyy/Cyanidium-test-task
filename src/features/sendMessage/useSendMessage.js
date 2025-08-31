'use client'

import toast from 'react-hot-toast'
import { initialValues } from './initialValues'
import { validationSchema } from './validationSchema'
import { sendMessageThunk } from '@/redux/sendMessage/operations'
import { useDispatch } from 'react-redux'
import { useModalFormContext } from '@/context/useModalFormContext/useModalFormContext'

const useSendMessage = () => {
	const dispatch = useDispatch()
	const { setIsModalFormOpen } = useModalFormContext()
	const handleSubmit = async (values, actions) => {
		try {
			await dispatch(sendMessageThunk(values)).unwrap()

			actions.resetForm()
			setIsModalFormOpen(false)
			toast.success('Successfully sended a message')
		} catch (error) {
			toast.error(error)
		}
	}

	return { initialValues, handleSubmit, validationSchema }
}

export default useSendMessage
