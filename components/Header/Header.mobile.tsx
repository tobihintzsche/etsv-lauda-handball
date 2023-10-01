import Image from 'next/image'
import React, { useState } from 'react'

import BurgerMenu from '../../images/BurgerMenu.svg'

import Link from 'next/link'
import { NavigationConfig } from '../../types/navigationTypes'
import { MobileNavigationOverlay } from '../Navigation/MobileNavigationOverlay'
import { useDialogHandler } from '../../utils/useDialogHandler'
import { CloseButtonSVG } from '../Navigation/CloseButtonSVG'
import { MobileNavigation } from '../Navigation/MobileNavigation'

interface MobileHeaderProps {
  navigationConfig: NavigationConfig
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  navigationConfig,
}) => {
  const { open, isOpen, close } = useDialogHandler({ initialValue: false })

  return (
    <div className="bg-primary mb-4 relative">
      <div className="flex justify-between md:py-2 px-4 h-10 md:h-12 md:px-8 ">
        <div className="text-2xl md:text-4xl lg:text-3xl my-auto">
          <Link href="/">ETSV LAUDA HANDBALL</Link>
        </div>
        {isOpen ? (
          <button
            type="button"
            className="text-black flex items-center"
            onClick={close}
          >
            {CloseButtonSVG}
          </button>
        ) : (
          <button onClick={open} className="flex items-center">
            <Image src={BurgerMenu} alt="Burger Menu" height={32} width={32} />
          </button>
        )}
        <div
          className={`fixed z-50 top-10 md:top-12 left-0 w-full h-full ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="absolute pt-2 inset-y-0 right-0 max-w-full flex h-full w-screen overflow-y-auto bg-primary">
            <div className="flex-1 relative flex flex-col px-4 md:px-8 pb-2">
              <MobileNavigation
                navigation={navigationConfig.navigation}
                handleClose={close}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
