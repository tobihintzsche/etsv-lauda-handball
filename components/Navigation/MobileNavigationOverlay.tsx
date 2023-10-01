import Link from 'next/link'
import { NavigationConfig } from '../../types/navigationTypes'
import { CloseButtonSVG } from './CloseButtonSVG'
import { MobileNavigation } from './MobileNavigation'
import React from 'react'
import { useDialogHandler } from '../../utils/useDialogHandler'

interface MobileNavigationOverlayProps {
  isOpen: boolean
  open: VoidFunction
  close: VoidFunction
  navigationConfig: NavigationConfig
}

export const MobileNavigationOverlay: React.FC<
  MobileNavigationOverlayProps
> = ({ isOpen, open, navigationConfig, close }) => {
  const { navigation } = navigationConfig

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full h-full ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="h-full w-screen overflow-y-auto bg-primary-200">
          <div className="flex-1 relative flex flex-col px-4 md:px-8 pb-2">
            <div>
              <div className="absolute items-center right-4 md:right-8 md:top-2">
                <button type="button" className="text-black" onClick={close}>
                  {CloseButtonSVG}
                </button>
              </div>
              <div className="text-2xl md:text-4xl lg:text-3xl">
                <Link href="/">ETSV LAUDA HANDBALL</Link>
              </div>
            </div>

            <div className="text-2xl md:text-4xl lg:text-3xl my-auto">
              <Link href="/">ETSV LAUDA HANDBALL</Link>
            </div>

            <MobileNavigation navigation={navigation} handleClose={close} />
          </div>
        </div>
      </div>
    </div>
  )
}
