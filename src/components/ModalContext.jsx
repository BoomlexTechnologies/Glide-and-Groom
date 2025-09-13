'use client'

import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false)

  const openCallbackModal = () => setIsCallbackModalOpen(true)
  const closeCallbackModal = () => setIsCallbackModalOpen(false)

  return (
    <ModalContext.Provider value={{
      isCallbackModalOpen,
      openCallbackModal,
      closeCallbackModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
