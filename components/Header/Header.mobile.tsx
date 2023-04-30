import Image from 'next/image'
import React, { useState } from 'react'

import BurgerMenu from '../../images/BurgerMenu.svg'

import Link from 'next/link'
import { NavigationConfig } from '../../types/navigationTypes'
import { MobileNavigationOverlay } from '../Navigation/MobileNavigationOverlay'

interface MobileHeaderProps {
  navigationConfig: NavigationConfig
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  navigationConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-yellow-400 mb-4 relative">
      <div className="flex justify-between md:py-2 px-4 md:px-8 ">
        <div className="text-2xl md:text-4xl lg:text-3xl my-auto">
          <Link href="/">ETSV LAUDA HANDBALL</Link>
        </div>
        <button onClick={toggleNavbar} className="flex">
          <Image src={BurgerMenu} alt="Burger Menu" height={40} width={40} />
        </button>
      </div>

      <MobileNavigationOverlay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navigationConfig={navigationConfig}
      />
    </div>
  )
}
