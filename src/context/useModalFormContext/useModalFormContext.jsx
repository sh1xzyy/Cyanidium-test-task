"use client"

import { createContext, useContext } from "react";

export const ModalFormContext = createContext()
export const useModalFormContext = () => useContext(ModalFormContext)