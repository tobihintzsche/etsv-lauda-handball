import Link from 'next/link'
import React from 'react'

import { NavigationSingleLink } from '../../types/navigationTypes'

export interface MobileNavigationItemProps {
  navigationItem: NavigationSingleLink
  handleClose: () => void
}

export const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  navigationItem,
  handleClose,
}) => {
  const { href, title } = navigationItem

  return (
    <Link href={href}>
      <a
        className="mr-4 hover:text-yellow-900 w-max text-4xl"
        onClick={handleClose}
      >
        {title.toUpperCase()}
      </a>
    </Link>
  )
}
