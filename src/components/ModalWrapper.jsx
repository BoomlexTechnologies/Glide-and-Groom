'use client'

import { useModal } from './ModalContext'
import CallbackModal from './CallbackModal'

export default function ModalWrapper() {
  const { isCallbackModalOpen, closeCallbackModal } = useModal()
  
  return <CallbackModal isOpen={isCallbackModalOpen} onClose={closeCallbackModal} />
}
