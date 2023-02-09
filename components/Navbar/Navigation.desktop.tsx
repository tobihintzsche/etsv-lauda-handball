import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo.svg'
import BurgerMenu from '/Users/tobiashintzsche/dev/etsv-lauda-handball/BurgerMenu.svg'

import Link from 'next/link'
import navbarConfig from './navigationConfig'
import NavigationItem from './NavigationItem.desktop'

export const DesktopNavigation = () => {
  const [activeSubNav, setActiveSubNav] = useState('')
  const [hoveredNavItem, setHoveredNavItem] = useState('')

  const toggleSubNav = (id) => {
    setActiveSubNav(id === activeSubNav ? '' : id)
  }

  const onMouseEnter = (id) => {
    setHoveredNavItem(id)
  }

  const onMouseLeave = () => {
    setHoveredNavItem('')
  }

  return (
    <>
      <div className="bg-yellow-400 py-2">
        <div className="max-w-screen-2xl flex justify-between mx-auto">
          <div>
            <Link href="/">
              <a className="inline-flex items-center p-2 ">
                <span className="text-m text-black font-bold uppercase tracking-wide mr-2 md:text-xl">
                  ETSV LAUDA HANDBALL
                </span>
                <Image src={Logo} alt="ETSV Logo" height={60} width={60} />
              </a>
            </Link>
          </div>

          <div className="items-center inline-flex">
            <ul className="flex justify-end pt-3 gap-4 typo-medium">
              {navbarConfig.navigation.map((item, index) => (
                <NavigationItem
                  navigationItem={item}
                  index={index}
                  isVisible={false}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

// <div
//               key={index}
//               onMouseEnter={() => item.subNav && onMouseEnter(item.link.url)}
//               onMouseLeave={onMouseLeave}
//             >
//               <a
//                 href={item.link.url}
//                 className="mr-4 text-lg font-bold"
//                 onClick={() => toggleSubNav(item.link.url)}
//               >
//                 {item.link.text.toUpperCase()}
//               </a>
//               <div
//                 className={
//                   hoveredNavItem === item.link.url
//                     ? 'absolute bg-yellow-400 flex pt-2 pb-2 flex-col gap-2'
//                     : 'hidden'
//                 }
//               >
//                 {item.subNav &&
//                   item.subNav.map((subNav, index) => (
//                     <a
//                       key={index}
//                       href={subNav.url}
//                       className="mr-4 pl-4 text-md"
//                     >
//                       {subNav.text.toUpperCase()}
//                     </a>
//                   ))}
//               </div>
//             </div>
