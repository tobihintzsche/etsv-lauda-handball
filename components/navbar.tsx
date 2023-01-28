import Image from 'next/image'
import React, { useState } from 'react'
import navbarConfig from '../navbarConfig'
import Logo from '../images/Handball_Logo.svg'
import BurgerMenu from '../images/BurgerMenu.svg'

import Link from 'next/link'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubNav, setActiveSubNav] = useState('')
  const [hoveredNavItem, setHoveredNavItem] = useState('')

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
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
    <div className="flex flex-row bg-yellow-400 p-3 ">
      <Link href="/">
        <a className="inline-flex items-center p-2 ">
          <span className="text-m text-black font-bold uppercase tracking-wide mr-2 md:text-xl">
            ETSV LAUDA HANDBALL
          </span>
          <Image src={Logo} alt="ETSV Logo" height={60} width={60} />
        </a>
      </Link>
      <Image src={BurgerMenu} alt="Burger Menu" height={40} width={40} />
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm flex lg:flex-grow">
          {navbarConfig.navbarItem.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => item.subNav && onMouseEnter(item.link.url)}
              onMouseLeave={onMouseLeave}
            >
              <a
                href={item.link.url}
                className="mr-4"
                onClick={() => toggleSubNav(item.link.url)}
              >
                {item.link.text}
              </a>
              <div
                className={
                  hoveredNavItem === item.link.url
                    ? 'absolute bg-yellow-400 flex pt-2 flex-col gap-2'
                    : 'hidden'
                }
              >
                {item.subNav &&
                  item.subNav.map((subNav, index) => (
                    <a key={index} href={subNav.url} className="mr-4">
                      {subNav.text}
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// ;<div className="flex items-center flex-wrap bg-yellow-400 p-3 ">
//   <Link href="/">
//     <a className="inline-flex items-center p-2 ">
//       <span className="text-m text-black font-bold uppercase tracking-wide mr-2 md:text-xl">
//         ETSV LAUDA HANDBALL
//       </span>
//       <Image src={Logo} alt="ETSV Logo" height={60} width={60} />
//     </a>
//   </Link>

//   {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
// </div>
