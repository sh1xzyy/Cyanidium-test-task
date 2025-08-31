import { emailRegex } from '@/lib/constants'
import * as Yup from 'yup'

export const validationSchema = Yup.object({
	name: Yup.string(),
	nickname: Yup.string(),
	email: Yup.string()
		.matches(emailRegex, 'Введите корректный Email')
		.required('Email обязателен'),
})
