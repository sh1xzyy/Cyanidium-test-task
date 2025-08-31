'use client'

import clsx from 'clsx'
import { useCloseModalByKeydown } from '../../../hooks/useCloseModalByKeyDown/useCloseModalByKeyDown'
import { handleOverlayClick } from '../../../utils/modal/handleOverlayClick'
import CloseModalButton from '../CloseModalButton/CloseModalButton'
import useLockBodyScroll from '@/hooks/useLockBodyScroll/useLockBodyScroll'

const BaseModal = ({ isModalOpen, styles, children, setIsModalOpen }) => {
	useCloseModalByKeydown(setIsModalOpen)
	useLockBodyScroll(isModalOpen)

	return (
		<div
			className='fixed left-1/2 top-[110px] pt-[79px] z-[1000] flex items-start justify-center h-full w-full -translate-x-1/2 animate-appearance bg-[#0c0117]'
			onClick={e => handleOverlayClick(e, setIsModalOpen)}
		>
			<div
				className={clsx(
					'relative h-auto w-full max-w-[410px] px-[50px] pt-[90px] pb-[73px] rounded-[28px] bg-[#0c0117] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)]',
					styles
				)}
			>
				<CloseModalButton
					styles='top-[28px] right-[28px]'
					setIsModalOpen={setIsModalOpen}
				/>
				{children}
			</div>
		</div>
	)
}

export default BaseModal
