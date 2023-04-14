import Link from 'next/link'
import { NavigationSingleLink } from '../../types/navigationTypes'

export interface SubNavigationItemProps {
  team: NavigationSingleLink
  classNames: string
}

export const SubNavigationItem: React.FC<SubNavigationItemProps> = ({
  team,
  classNames,
}) => {
  return (
    <Link href={`${team.href}`}>
      <a className={classNames}>{team.title}</a>
    </Link>
  )
}
