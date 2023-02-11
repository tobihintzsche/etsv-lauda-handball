import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import navbarConfig from './navigationConfig'
import Logo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo.svg'
import BurgerMenu from '/Users/tobiashintzsche/dev/etsv-lauda-handball/BurgerMenu.svg'

import Link from 'next/link'
import { DesktopNavigation } from './Navigation.desktop'
import { MobileNavigation } from './Navigation.mobile'
import { useDeviceType } from './useDeviceType'

export const Navigation = () => {
  const deviceType = useDeviceType()

  return (
    <>
      {deviceType === 'desktop' ? <DesktopNavigation /> : <MobileNavigation />}
    </>
  )
}
