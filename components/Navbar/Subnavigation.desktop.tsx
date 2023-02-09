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
        {subNavigation.map((element) => (
          <span className="text-lg">{element.title}</span>
        ))}
      </div>
    </>
  )
}
