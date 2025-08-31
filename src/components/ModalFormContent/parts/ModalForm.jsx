'use client'

import Loader from '@/components/common/Loader/Loader'
import useSendMessage from '@/features/sendMessage/useSendMessage'
import { useClientTranslation } from '@/hooks/useClientTranslation/useClientTranslation'
import { selectIsLoading } from '@/redux/sendMessage/selectors'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'

const ModalForm = () => {
	const { initialValues, handleSubmit, validationSchema } = useSendMessage()
	const isLoading = useSelector(selectIsLoading)
	const { t } = useClientTranslation()

	return (
		<>
			{isLoading && <Loader />}
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<Form className='flex flex-col justify-between h-full'>
					<div className='flex flex-col gap-[18px]'>
						<div>
							<label className='visually-hidden' htmlFor='name'>
								{t('name')}
							</label>
							<Field
								className='w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent transition linear duration-[250ms] hover:border-red-400 focus:outline-[rgba(160,65,255,0.4)]'
								name='name'
								id='name'
								placeholder={t('name')}
							/>
						</div>

						<div>
							<label className='visually-hidden' htmlFor='nickname'>
								{t('nickname')}
							</label>
							<Field
								className='w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent transition linear duration-[250ms] hover:border-red-400 focus:outline-[rgba(167,93,243,0.2)]'
								name='nickname'
								id='nickname'
								placeholder={t('nickname')}
							/>
						</div>

						<div className='relative'>
							<label className='visually-hidden' htmlFor='email'>
								Email
							</label>
							<Field
								className='w-full h-[46px] pl-[14px] rounded-[14px] bg-[#ffffff] font-normal text-[14px] text-[#0c0117] placeholder:text-[#0c0117] outline-transparent transition linear duration-[250ms] hover:border-red-400 focus:outline-[rgba(167,93,243,0.2)]'
								name='email'
								id='email'
								placeholder='Email*'
							/>
							<ErrorMessage
								className='absolute -bottom-[25px] left-0 text-red-600 text-[14px]'
								name='email'
								component='span'
							/>
						</div>
					</div>
					<button
						className='h-[50px] rounded-[10px] min-w-[317px] bg-[#ffffff] font-bold text-[14px] leading-[1.43] text-[#0c0117] mt-[40px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] gradient-border-84 xl:min-w-[310px]'
						type='submit'
						aria-label={t('sendMessageButton')}
					>
						{t('sendButton')}
					</button>
				</Form>
			</Formik>
		</>
	)
}

export default ModalForm
