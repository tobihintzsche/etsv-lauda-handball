import Link from 'next/link'
import { NavigationSingleLink } from '../../types/navigationTypes'

export interface MobileNavigationItemProps {
  navigationItem: NavigationSingleLink
}

export const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  navigationItem,
}) => {
  const { href, title } = navigationItem

  return (
    <Link href={href}>
      <a className="mr-4 hover:text-yellow-900 w-max text-5xl">
        {title.toUpperCase()}
      </a>
    </Link>
  )
}
