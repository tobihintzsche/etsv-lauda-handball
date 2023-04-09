import { gql, useApolloClient, useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { useLayoutContext } from '../LayoutContext'
import { Team } from '../pages/teams/[slug]'
import Footer from './footer'
import DesktopHeader from './Header.desktop'
import MobileHeader from './Header.mobile'
import { Navigation, SortedNavigationTeams } from './Navbar/Navigation'
import { DesktopNavigation } from './Navbar/Navigation.desktop'
import { MobileNavigation } from './Navbar/Navigation.mobile'
import {
  NavigationConfig,
  NavigationSingleLink,
} from './Navbar/navigationConfig'
import { useDeviceType } from './Navbar/useDeviceType'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DynamicNavigation = dynamic(
  () => import('./Navbar/Navigation').then((m) => m.Navigation),
  {
    ssr: false,
  }
)

export default function Layout({ children }: DashboardLayoutProps) {
  const { loading, error, data } = useQuery(
    gql`
      query NavigationRequest {
        teams {
          name
          gender
        }
      }
    `
  )

  const [navigationItems, setNavigationItems] = useState([])

  useEffect(() => {
    if (data) {
      setNavigationItems(data.teams)
    }
  }, [data])

  if (error) return <p>Error :(</p>

  function sortTeams(teams: Team[]): SortedNavigationTeams {
    return {
      men: teams.filter((team: Team) => team.gender === 'Maennlich'),
      woman: teams.filter((team: Team) => team.gender === 'Weiblich'),
      mixed: teams.filter((team: Team) => team.gender === 'Gemischt'),
    }
  }

  const deviceType = useDeviceType()

  const isMobile = deviceType === 'mobile'

  const sortedNavigationTeams = sortTeams(navigationItems)

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

  if (!navigationItems) return null

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="">
        <DynamicNavigation teams={navigationItems} />
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">{children}</div>
        </div>

        <Footer />
      </div>
    </>
  )
}
