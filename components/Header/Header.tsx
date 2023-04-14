import React from 'react'
import { useDeviceType } from '../Navigation/useDeviceType'

import { NavigationConfig, NavigationItem } from '../../types/navigationTypes'
import { Team } from '../../types/teamTypes'
import { DesktopHeader } from './Header.desktop'
import { MobileHeader } from './Header.mobile'
import { enrichNavigationConfig } from '../../utils/enrichNavigationConfig'
import { navigationConfig } from '../Navigation/navigationConfig'

export interface HeaderProps {
  teams: Team[]
}

const Header: React.FC<HeaderProps> = ({ teams }) => {
  const deviceType = useDeviceType()

  const enrichedNavigationConfig = enrichNavigationConfig(
    navigationConfig,
    teams
  )

  const Header = deviceType === 'desktop' ? DesktopHeader : MobileHeader

  return <Header navigationConfig={enrichedNavigationConfig} />
}

export default Header
