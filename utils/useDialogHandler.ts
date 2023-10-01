import { useState } from 'react'

export const useDialogHandler = ({
  initialValue,
}: {
  initialValue: boolean
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    open,
    close,
  }
}
