import { NavigationSingleLink } from '../../types/navigationTypes'
import { SubNavigationItem } from './SubNavigationItem'

export interface SubNavigationItemsProps {
  subNavigationGender: NavigationSingleLink[]
}

export const SubNavigationItems: React.FC<SubNavigationItemsProps> = ({
  subNavigationGender,
}) => {
  return (
    <div className="flex flex-col">
      {subNavigationGender.map((team, index) => (
        <SubNavigationItem
          team={team}
          classNames={'text-xl whitespace-nowrap md:text-2xl'}
          key={index}
        />
      ))}
    </div>
  )
}
