import Link from 'next/link'
import React from 'react'
import { NavigationSingleLink } from '../../types/navigationTypes'
import { SubNavigationItems } from './SubNavigationItems'

export const genderMapping: Record<string, string> = {
  men: 'Männlich',
  woman: 'Weiblich',
  mixed: 'Gemischt',
}

export interface SubNavigationProps {
  subNavigation: {
    men?: NavigationSingleLink[]
    woman?: NavigationSingleLink[]
    mixed?: NavigationSingleLink[]
  }
  handleClose: () => void
}

export const SubNavigation: React.FC<SubNavigationProps> = ({
  subNavigation,
  handleClose,
}) => {
  return (
    <>
      <div className="flex pl-2 flex-col lg:flex-row md:w-full md:justify-between">
        {Object.entries(subNavigation).map(([gender, teams]) => {
          if (teams.length > 0)
            return (
              <div key={gender} className="flex flex-1 flex-col pb-4">
                <div className="text-3xl mb-1 lg:text-3xl">
                  {genderMapping[gender].toUpperCase()}
                </div>
                <SubNavigationItems
                  subNavigationGender={teams}
                  handleClose={handleClose}
                />
              </div>
            )
        })}
      </div>
    </>
  )
}
