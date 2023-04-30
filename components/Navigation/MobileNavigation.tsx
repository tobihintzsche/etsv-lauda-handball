import { NavigationItem } from '../../types/navigationTypes'
import { MobileNavigationItem } from './MobileNavigationItem'
import { SubNavigation } from './Subnavigation.desktop'
import React from 'react'

export interface MobileNavigationProps {
  navigation: NavigationItem[]
  handleClose: () => void
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  navigation,
  handleClose,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {navigation.map((navigationItem: NavigationItem, index) => (
        <div className="flex flex-col" key={index}>
          <MobileNavigationItem
            navigationItem={navigationItem.link}
            handleClose={handleClose}
          />
          <div>
            {navigationItem.subNavigation &&
              navigationItem.link.href === navigationItem.link.href && (
                <SubNavigation
                  subNavigation={navigationItem.subNavigation}
                  handleClose={handleClose}
                />
              )}
          </div>
        </div>
      ))}
    </div>
  )
}
