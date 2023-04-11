import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { NavigationConfig, NavigationSingleLink } from './navigationConfig'
import Logo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo.svg'
import BurgerMenu from '/Users/tobiashintzsche/dev/etsv-lauda-handball/BurgerMenu.svg'

import Link from 'next/link'
import { DesktopNavigation } from './Navigation.desktop'
import { MobileNavigation } from './Navigation.mobile'
import { useDeviceType } from './useDeviceType'
import client from '../../apollo-client'
import { Team } from '../../pages/teams/[slug]'
import { gql } from '@apollo/client'
import { useLayoutContext } from '../../LayoutContext'

export interface NavigationPageProps {
  teams: Team[]
}

export interface SortedNavigationTeams {
  men: Team[]
  woman: Team[]
  mixed: Team[]
}

export const Navigation: React.FC<NavigationPageProps> = ({ teams }) => {
  function sortTeams(teams: Team[]): SortedNavigationTeams {
    return {
      men: teams.filter((team: Team) => team.gender === 'Maennlich'),
      woman: teams.filter((team: Team) => team.gender === 'Weiblich'),
      mixed: teams.filter((team: Team) => team.gender === 'Gemischt'),
    }
  }

  const deviceType = useDeviceType()

  const sortedNavigationTeams = sortTeams(teams)

  const navigationConfig: NavigationConfig = {
    navigation: [
      {
        link: {
          title: 'Verein',
          href: '/club',
        },
      },
      {
        link: {
          title: 'Herren',
          href: '/teams/herren',
        },
      },
      {
        link: {
          title: 'Teams',
          href: '/teams',
        },
        subNavigation: {
          men: [
            ...sortedNavigationTeams.men.map((team) => {
              return {
                title: team.name,
                href: `/teams/${team.slug}`,
              } as NavigationSingleLink
            }),
          ],

          woman: [
            ...sortedNavigationTeams.woman.map((team) => {
              return {
                title: team.name,
                href: `/teams/${team.slug}`,
              } as NavigationSingleLink
            }),
          ],
          mixed: [
            ...sortedNavigationTeams.woman.map((team) => {
              return {
                title: team.name,
                href: `/teams/${team.slug}`,
              } as NavigationSingleLink
            }),
          ],
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

  return (
    <>
      {deviceType !== 'desktop' ? (
        <MobileNavigation navigationConfig={navigationConfig} />
      ) : (
        <DesktopNavigation navigationConfig={navigationConfig} />
      )}
    </>
  )
}
