import Link from 'next/link'
import { NavigationSingleLink } from '../../types/navigationTypes'

export interface SubNavigationItemProps {
  team: NavigationSingleLink
  classNames: string
  handleClose: () => void
}

export const SubNavigationItem: React.FC<SubNavigationItemProps> = ({
  team,
  classNames,
  handleClose,
}) => {
  return (
    <Link href={`${team.href}`}>
      <a className={classNames} onClick={handleClose}>
        {team.title}
      </a>
    </Link>
  )
}
