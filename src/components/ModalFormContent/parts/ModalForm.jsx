'use client'

import useSendMessage from '@/features/sendMessage/useSendMessage'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const ModalForm = () => {
	const { initialValues, handleSubmit, validationSchema } = useSendMessage()

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form className='flex flex-col justify-between h-full'>
				<div className='flex flex-col gap-[18px]'>
					<div>
						<label className='visually-hidden' htmlFor='name'>
							Имя
						</label>
						<Field
							className='w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent hover:border-red-400 focus:border-red-400'
							name='name'
							id='name'
							placeholder='Имя'
						/>
					</div>

					<div>
						<label className='visually-hidden' htmlFor='nickname'>
							Ник Telegram
						</label>
						<Field
							className='w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent hover:border-red-400 focus:border-red-400'
							name='nickname'
							id='nickname'
							placeholder='Ник Telegram'
						/>
					</div>

					<div className='relative'>
						<label className='visually-hidden' htmlFor='email'>
							Email
						</label>
						<Field
							className='w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent hover:border-red-400 focus:border-red-400'
							name='email'
							id='email'
							placeholder='Email*'
						/>
						<ErrorMessage
							className='absolute -bottom-[25px] left-0 text-red-600'
							name='email'
							component='span'
						/>
					</div>
				</div>
				<button
					className='h-[50px] rounded-[10px] min-w-[317px] bg-[#ffffff] font-bold text-[14px] leading-[1.43] text-[#0c0117] mt-[40px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] gradient-border-84 xl:min-w-[310px]'
					type='submit'
				>
					Отправить
				</button>
			</Form>
		</Formik>
	)
}

export default ModalForm
