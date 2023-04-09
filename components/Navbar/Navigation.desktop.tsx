import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo.svg'
import Banner from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Banner.png'
import BurgerMenu from '/Users/tobiashintzsche/dev/etsv-lauda-handball/BurgerMenu.svg'

import Link from 'next/link'
import { NavigationConfig, NavigationSingleLink } from './navigationConfig'
import NavigationItem from './NavigationItem.desktop'
import { SortedNavigationTeams } from './Navigation'
import { title } from 'process'
import DesktopNavigationItem from './NavigationItem.desktop'

interface DesktopNavigationProps {
  navigationConfig: NavigationConfig
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navigationConfig,
}) => {
  return (
    <div className="bg-yellow-400 py-2">
      <div className="max-w-screen-2xl mx-auto flex justify-center">
        <div className="flex justify-between w-full lg:mx-10 md:mx-8 sm:mx-6">
          <div>
            <Link href="/">
              <a className="inline-flex items-center py-2 ">
                <span className="text-m text-black uppercase font-medium tracking-wide mr-2 md:text-3xl">
                  ETSV LAUDA HANDBALL
                </span>
                <Image src={Logo} alt="ETSV Logo" height={60} width={60} />
              </a>
            </Link>
          </div>

          <div className="items-center inline-flex">
            <ul className="flex justify-end pt-3 gap-4 typo-medium">
              {navigationConfig.navigation.map((item, index) => (
                <div key={index}>
                  <DesktopNavigationItem
                    navigationItem={item}
                    index={index}
                    isVisible={false}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
