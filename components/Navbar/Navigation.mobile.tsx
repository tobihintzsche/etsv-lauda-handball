import Image from 'next/image'
import React, { useState } from 'react'

import Logo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo.svg'
import BurgerMenu from '/Users/tobiashintzsche/dev/etsv-lauda-handball/BurgerMenu.svg'

import Link from 'next/link'
import navbarConfig from './navigationConfig'

export const MobileNavigation = () => {
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
    <div className="flex flex-col bg-yellow-400 px-8 ">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="inline-flex items-center">
            <span className="text-m text-black font-bold uppercase tracking-wide mr-2 md:text-xl">
              ETSV LAUDA HANDBALL
            </span>
            <Image src={Logo} alt="ETSV Logo" height={60} width={60} />
          </a>
        </Link>
        <button onClick={toggleNavbar}>
          <Image src={BurgerMenu} alt="Burger Menu" height={40} width={40} />
        </button>
      </div>

      <div className={`w-full ${isOpen ? 'flex flex-col gap-2' : 'hidden'}`}>
        {navbarConfig.navbarItem.map((item, index) => (
          <div
            className="w-max"
            key={index}
            onMouseEnter={() => item.subNav && onMouseEnter(item.link.url)}
            onMouseLeave={onMouseLeave}
          >
            <a
              href={item.link.url}
              className="mr-4 hover:text-yellow-900 w-max text-lg"
              onClick={() => toggleSubNav(item.link.url)}
            >
              {item.link.text.toUpperCase()}
            </a>
            {hoveredNavItem === item.link.url && (
              <div
                className="
                      bg-yellow-400 flex pt-2 flex-col gap-2"
              >
                {item.subNav &&
                  item.subNav.map((subNav, index) => (
                    <a
                      key={index}
                      href={subNav.url}
                      className="mr-4 w-max text-yellow-900 text-lg"
                    >
                      {subNav.text.toUpperCase()}
                    </a>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
