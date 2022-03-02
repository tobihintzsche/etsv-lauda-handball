import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '../images/Handball_Logo.svg'

export default function Navbar() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="flex items-center flex-wrap bg-yellow-400 p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 ">
            {/* Hier Logo ETSV Lauda Handball einfügen */}

            <span className="text-m text-black font-bold uppercase tracking-wide mr-2 md:text-xl">
              ETSV LAUDA HANDBALL
            </span>
            <Image src={Logo} alt="ETSV Logo" height={60} width={60} />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-yellow-600 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black ">
                Home
              </a>
            </Link>
            <Link href="/herren">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black">
                Herren
              </a>
            </Link>
            <Link href="/jugend">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black">
                Jugend
              </a>
            </Link>
            <Link href="/sponsoren">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black">
                Sponsoren
              </a>
            </Link>
            <Link href="/termine">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black">
                Termine
              </a>
            </Link>
            <Link href="/news">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black">
                News
              </a>
            </Link>
            <Link href="/socialMedia">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-yellow-600 hover:text-black">
                Social Media
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
