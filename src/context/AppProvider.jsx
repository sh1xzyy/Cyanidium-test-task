import BurgerMenuOpenProvider from './useBurgerMenuOpenContext/BurgerMenuOpenProvider'
import ModalFormProvider from './useModalFormContext/ModalFormProvider'

const AppProvider = ({ children }) => {
	return (
		<BurgerMenuOpenProvider>
			<ModalFormProvider>{children}</ModalFormProvider>
		</BurgerMenuOpenProvider>
	)
}

export default AppProvider
