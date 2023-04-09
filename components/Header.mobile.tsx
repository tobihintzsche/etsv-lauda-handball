import React from 'react'
import { MobileNavigation } from './Navbar/Navigation.mobile'
import { NavigationConfig } from './Navbar/navigationConfig'

function MobileHeader() {
  const navigationConfig: NavigationConfig = {
    navigation: [
      {
        link: {
          title: 'Verein',
          href: '/about',
        },
      },
      {
        link: {
          title: 'Herren',
          href: '/teams/Herren',
        },
      },
      {
        link: {
          title: 'Teams',
          href: '/teams',
        },
        subNavigation: {
          men: [],

          woman: [],
          mixed: [],
        },
      },
      {
        link: {
          title: 'News',
          href: '/news',
        },
      },
    ],
  }
  return <div className="text-7xl">Test</div>
}

export default MobileHeader
