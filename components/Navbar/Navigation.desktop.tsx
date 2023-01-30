import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo.svg'
import BurgerMenu from '/Users/tobiashintzsche/dev/etsv-lauda-handball/BurgerMenu.svg'

import Link from 'next/link'
import navbarConfig from './navigationConfig'

export const DesktopNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubNav, setActiveSubNav] = useState('')
  const [hoveredNavItem, setHoveredNavItem] = useState('')

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  //TODO:Close Navbar when scrolling down
  const onScrollDown = () => {
    setIsOpen(false)
  }

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
    <div className="flex justify-between bg-yellow-400 px-10 py-2">
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

      <div className="flex items-center">
        {navbarConfig.navbarItem.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => item.subNav && onMouseEnter(item.link.url)}
            onMouseLeave={onMouseLeave}
          >
            <a
              href={item.link.url}
              className="mr-4 text-lg font-bold"
              onClick={() => toggleSubNav(item.link.url)}
            >
              {item.link.text.toUpperCase()}
            </a>
            <div
              className={
                hoveredNavItem === item.link.url
                  ? 'absolute bg-yellow-400 flex pt-2 pb-2 flex-col gap-2'
                  : 'hidden'
              }
            >
              {item.subNav &&
                item.subNav.map((subNav, index) => (
                  <a
                    key={index}
                    href={subNav.url}
                    className="mr-4 pl-4 text-md"
                  >
                    {subNav.text.toUpperCase()}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
