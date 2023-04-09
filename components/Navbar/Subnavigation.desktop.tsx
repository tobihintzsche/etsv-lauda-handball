import { link } from 'fs'
import React, { useState } from 'react'
import { NavigationItem, NavigationSingleLink } from './navigationConfig'

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
  const { men } = subNavigation

  return (
    <>
      <div className="h-10 flex w-full justify-between">
        <div className="flex flex-1 flex-col">
          <div className="text-3xl">Männlich</div>
          <div className="flex flex-col">
            {subNavigation.men &&
              subNavigation.men.map((team, index) => (
                <span className="text-2xl font-medium" key={index}>
                  {team.title}
                </span>
              ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="text-3xl">Weiblich</div>
          <div>
            {subNavigation.woman &&
              subNavigation.woman.map((team, index) => (
                <span className="text-2xl font-medium" key={index}>
                  {team.title}
                </span>
              ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="text-3xl">Mixed</div>
          <div>
            {subNavigation.mixed &&
              subNavigation.mixed.map((team, index) => (
                <span className="text-2xl font-medium" key={index}>
                  {team.title}
                </span>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
