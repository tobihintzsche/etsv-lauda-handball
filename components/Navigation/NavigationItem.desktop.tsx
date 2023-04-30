import classNames from 'classnames'
import React from 'react'

import Link from 'next/link'
import { useState } from 'react'
import { useLayoutContext } from '../../LayoutContext'
import { NavigationItem } from '../../types/navigationTypes'
import { SubNavigation } from './Subnavigation.desktop'

interface NavigationItemProps {
  navigationItem: NavigationItem
  index: number
  isVisible: boolean
}

function DesktopNavigationItem({
  navigationItem,
  index,
  isVisible,
}: NavigationItemProps) {
  const [isTouchInput, setIsTouchInput] = useState<boolean>()
  const { openSubNav, setOpenSubNav } = useLayoutContext()

  const currentNavItem = index

  return (
    <>
      <li
        key={navigationItem.link.title}
        onMouseEnter={() => setOpenSubNav(currentNavItem)}
        onMouseLeave={() => setOpenSubNav(-1)}
        onTouchStart={() => setIsTouchInput(true)}
        className="pl-medium"
      >
        <div
          className={classNames(
            openSubNav === currentNavItem && 'open',
            'relative pb-3 hover-underline-animation'
          )}
        >
          <Link href={navigationItem.link.href ?? ''}>
            <button
              onClick={(event) => {
                if (isTouchInput) {
                  event.preventDefault()
                }
              }}
              onKeyDown={(event) => {
                if (isTouchInput) {
                  event.preventDefault()
                }
              }}
              className="font-medium text-3xl"
            >
              {navigationItem.link.title}
            </button>
          </Link>
        </div>
        {navigationItem.subNavigation && (
          <div>
            <div
              className={classNames(
                openSubNav === currentNavItem &&
                  'fixed left-0 z-20 w-full h-screen opacity-50 bg-white'
              )}
              onMouseEnter={() => setOpenSubNav(-1)}
            ></div>
            <div
              className={classNames(
                'absolute left-0 w-full z-30 py-6 bg-yellow-400 h-[250px] duration-300 elevation-bottom',
                openSubNav !== currentNavItem && 'hidden'
              )}
            >
              <div className="max-w-screen-2xl mx-auto flex justify-center">
                <div className="flex justify-between w-full lg:mx-10 md:mx-8 sm:mx-6">
                  <SubNavigation subNavigation={navigationItem.subNavigation} />
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  )
}

export default DesktopNavigationItem
