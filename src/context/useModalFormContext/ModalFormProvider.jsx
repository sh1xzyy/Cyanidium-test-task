"use client"

import { useState } from "react"
import { ModalFormContext } from "./useModalFormContext"


const ModalFormProvider = ({children}) => {
    const [isModalFormOpen, setIsModalFormOpen] = useState(false)

  return (
    <ModalFormContext.Provider value={{isModalFormOpen, setIsModalFormOpen}}>
        {children}
    </ModalFormContext.Provider>
    )
}

export default ModalFormProvider