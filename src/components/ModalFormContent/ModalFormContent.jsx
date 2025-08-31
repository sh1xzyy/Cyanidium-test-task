import ModalForm from './parts/ModalForm'
import Title from './parts/Title'

const ModalFormContent = () => {
	return (
		<div className='flex flex-col items-center justify-center h-full'>
			<Title />
			<ModalForm />
		</div>
	)
}

export default ModalFormContent
