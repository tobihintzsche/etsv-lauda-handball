import { gql, useQuery } from '@apollo/client'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import React, { createContext, useContext, useState } from 'react'

export interface LayoutContextValue {
  isHeaderExpanded: boolean
  setIsHeaderExpanded: Dispatch<SetStateAction<boolean>>
  openSubNav: number | null
  setOpenSubNav: Dispatch<SetStateAction<number>>
}

export const LayoutContext = createContext<LayoutContextValue | null>(null)

export const LayoutContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true)
  const [openSubNav, setOpenSubNav] = useState(-1)

  const value: LayoutContextValue = {
    isHeaderExpanded,
    setIsHeaderExpanded,
    openSubNav,
    setOpenSubNav,
  }

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  )
}

export function useLayoutContext(): LayoutContextValue {
  const value = useContext(LayoutContext)
  if (!value) {
    throw new Error("Couldn't find a provider for the `LayoutContext`")
  }
  return value
}
