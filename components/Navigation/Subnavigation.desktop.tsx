import Link from 'next/link'
import React from 'react'
import { NavigationSingleLink } from '../../types/navigationTypes'
import { SubNavigationItems } from './SubNavigationItems'

const genderMapping: Record<string, string> = {
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
}

export const SubNavigation: React.FC<SubNavigationProps> = ({
  subNavigation,
}) => {
  return (
    <>
      <div className="flex flex-wrap md:w-full md:justify-between">
        {Object.entries(subNavigation).map(([gender, teams]) => {
          if (teams.length > 0)
            return (
              <div key={gender} className="flex flex-1 flex-col pb-4">
                <div className="text-2xl md:text-2xl lg:text-3xl">
                  {genderMapping[gender]}
                </div>
                <SubNavigationItems subNavigationGender={teams} />
              </div>
            )
        })}
      </div>
    </>
  )
}
