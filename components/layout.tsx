import { useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { GET_NAVIGATION, GET_SPONSORS } from '../queries/clubQueries'
import { Sponsor } from '../types/clubTypes'

import FooterWithSponsors from './Footer/FooterWithSponsors'
import { NavigationPageProps } from './Navbar/Navigation'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DynamicNavigation = dynamic<NavigationPageProps>(
  () => import('./Navbar/Navigation').then((m) => m.Navigation),
  {
    ssr: false,
  }
)

export default function Layout({ children }: DashboardLayoutProps) {
  const { error, data: homeTeamResponse } = useQuery(GET_NAVIGATION)

  const { data: sponsorsResponse } = useQuery(GET_SPONSORS)

  const [navigationItems, setNavigationItems] = useState([])

  const [sponsors, setSponsors] = useState<Sponsor[]>([])

  useEffect(() => {
    if (homeTeamResponse) {
      setNavigationItems(homeTeamResponse.teams)
    }
  }, [homeTeamResponse])

  useEffect(() => {
    if (sponsorsResponse) {
      setSponsors(sponsorsResponse.sponsors)
    }
  }, [sponsorsResponse])

  if (error) return <p>Error :(</p>

  if (!navigationItems) return null

  return (
    <>
      <DynamicNavigation teams={navigationItems} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">{children}</div>
      </div>

      <FooterWithSponsors sponsors={sponsors} />
    </>
  )
}
