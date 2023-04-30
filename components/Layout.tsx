import { useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

import { GET_CLUBS, GET_NAVIGATION, GET_SPONSORS } from '../queries/clubQueries'
import { Club, Sponsor } from '../types/clubTypes'

import FooterWithSponsors from './Footer/FooterWithSponsors'
import { HeaderProps } from './Header/Header'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DynamicHeader = dynamic<HeaderProps>(
  () => import('./Header/Header').then((m) => m.default),
  {
    ssr: false,
  }
)

export const Layout = ({ children }: DashboardLayoutProps) => {
  const { error, data: homeTeamResponse } = useQuery(GET_NAVIGATION)

  const { data: clubResponse } = useQuery(GET_CLUBS)

  const { data: sponsorsResponse } = useQuery(GET_SPONSORS)

  const [navigationItems, setNavigationItems] = useState([])

  const [club, setClub] = useState<Club>()

  const [sponsors, setSponsors] = useState<Sponsor[]>([])

  useEffect(() => {
    if (homeTeamResponse) {
      setNavigationItems(homeTeamResponse.teams)
    }
  }, [homeTeamResponse])

  useEffect(() => {
    if (clubResponse) {
      setClub(clubResponse.clubs[0])
    }
  }, [clubResponse])

  useEffect(() => {
    if (sponsorsResponse) {
      setSponsors(sponsorsResponse.sponsors)
    }
  }, [sponsorsResponse])

  if (error) return <p>Error :(</p>

  if (!navigationItems) return null

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="sticky top-0 z-50">
          <DynamicHeader teams={navigationItems} />
        </div>
        <div className="max-w-screen-2xl  mx-auto">
          <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">{children}</div>
        </div>
      </div>

      <div>
        <FooterWithSponsors
          sponsors={sponsors}
          googleMapsLink={club?.google_maps_link}
          cmsLink={club?.cmsLink}
        />
      </div>
    </div>
  )
}
