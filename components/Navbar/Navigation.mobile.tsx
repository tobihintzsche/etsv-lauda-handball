import Image from 'next/image'
import React, { useState } from 'react'

import CuttedLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/images//Handball_Logo_Cutted_Square_Project.svg'
import BurgerMenu from '/Users/tobiashintzsche/dev/etsv-lauda-handball/images//BurgerMenu.svg'

import Link from 'next/link'
import { MobileNavigationOverlay } from './MobileNavigationOverlay'
import { NavigationConfig } from '../../types/navigationTypes'

interface MobileNavigationProps {
  navigationConfig: NavigationConfig
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  navigationConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-yellow-400 relative">
      <div className="flex justify-between ">
        <div className="text-2xl lg:text-3xl pl-14 my-auto">
          <Link href="/">ETSV LAUDA HANDBALL</Link>
        </div>
        <button onClick={toggleNavbar} className="flex">
          <Image src={BurgerMenu} alt="Burger Menu" height={40} width={40} />
        </button>
      </div>

      <div className="absolute h-12 w-12 left-0 bottom-0">
        <Image src={CuttedLogo} alt="ETSV Logo" height={48} width={48} />
      </div>
      <MobileNavigationOverlay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navigationConfig={navigationConfig}
      />
    </div>
  )
}
