import { NavigationSingleLink } from '../../types/navigationTypes'
import { SubNavigationItem } from './SubNavigationItem'
import React from 'react'

export interface SubNavigationItemsProps {
  subNavigationGender: NavigationSingleLink[]
  handleClose?: () => void
}

export const SubNavigationItems: React.FC<SubNavigationItemsProps> = ({
  subNavigationGender,
  handleClose,
}) => {
  return (
    <div className="flex flex-col">
      {subNavigationGender.map((team, index) => (
        <SubNavigationItem
          team={team}
          classNames={
            'text-xl whitespace-nowrap hover:bg-black hover:text-primary hover:shadow-[0px_0px_0px_3px_rgba(0,0,0,1)] w-min md:text-2xl'
          }
          key={index}
          handleClose={handleClose}
        />
      ))}
    </div>
  )
}
