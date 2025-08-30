import ModalFormProvider from "./useModalFormContext/ModalFormProvider"

const AppProvider = ({children}) => {
  return (
    <ModalFormProvider>
        {children}
    </ModalFormProvider>
    )
}

export default AppProvider