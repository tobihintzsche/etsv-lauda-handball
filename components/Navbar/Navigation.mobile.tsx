import Image from 'next/image'
import React, { useState } from 'react'

import Logo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo.svg'
import BurgerMenu from '/Users/tobiashintzsche/dev/etsv-lauda-handball/BurgerMenu.svg'

import Link from 'next/link'
import navbarConfig from './navigationConfig'

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activesubNavigation, setActivesubNavigation] = useState('')
  const [hoveredNavItem, setHoveredNavItem] = useState('')

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  //TODO:Close Navbar when scrolling down
  const onScrollDown = () => {
    setIsOpen(false)
  }

  const togglesubNavigation = (id) => {
    setActivesubNavigation(id === activesubNavigation ? '' : id)
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
        {navbarConfig.navigation.map((item, index) => (
          <div
            className="w-max"
            key={index}
            onMouseEnter={() =>
              item.subNavigation && onMouseEnter(item.link.href)
            }
            onMouseLeave={onMouseLeave}
          >
            <a
              href={item.link.href}
              className="mr-4 hover:text-yellow-900 w-max text-lg"
              onClick={() => togglesubNavigation(item.link.href)}
            >
              {item.link.title.toUpperCase()}
            </a>
            {hoveredNavItem === item.link.href && (
              <div
                className="
                      bg-yellow-400 flex pt-2 flex-col gap-2"
              >
                {item.subNavigation &&
                  item.subNavigation.map((subNavigation, index) => (
                    <a
                      key={index}
                      href={subNavigation.href}
                      className="mr-4 w-max text-yellow-900 text-lg"
                    >
                      {subNavigation.title.toUpperCase()}
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
