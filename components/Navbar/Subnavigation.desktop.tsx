import { link } from 'fs'
import React, { useState } from 'react'
import { NavigationItem, NavigationSingleLink } from './navigationConfig'

export interface SubNavigationProps {
  subNavigation: NavigationSingleLink[]
}

export const SubNavigation: React.FC<SubNavigationProps> = ({
  subNavigation,
}) => {
  return (
    <>
      <div className="h-10 flex w-full justify-between">
        {subNavigation.map((element, index) => (
          <span className="text-2xl font-medium" key={index}>
            {element.title}
          </span>
        ))}
      </div>
    </>
  )
}
