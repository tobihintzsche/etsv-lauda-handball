import { NavigationItem } from '../../types/navigationTypes'
import { MobileNavigationItem } from './MobileNavigationItem'
import { SubNavigation } from './Subnavigation.desktop'

export interface MobileNavigationProps {
  navigation: NavigationItem[]
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  navigation,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {navigation.map((navigationItem, index) => (
        <div className="flex flex-col" key={index}>
          <MobileNavigationItem navigationItem={navigationItem.link} />
          <div>
            {navigationItem.subNavigation &&
              navigationItem.link.href === navigationItem.link.href && (
                <SubNavigation subNavigation={navigationItem.subNavigation} />
              )}
          </div>
        </div>
      ))}
    </div>
  )
}
