import { gql, useApolloClient, useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'

import FooterWithSponsors from './FooterWithSponsors'
import { NavigationPageProps } from './Navbar/Navigation'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export interface Sponsor {
  image: {
    url: string
  }
  link: string
  name: string
  sponsoring_rank: SponsoringRank
}

export interface SponsoringRank {
  sponsoringRank: 'Hauptsponsor' | 'Premiumsponsor' | 'CoSponsor'
}

const DynamicNavigation = dynamic<NavigationPageProps>(
  () => import('./Navbar/Navigation').then((m) => m.Navigation),
  {
    ssr: false,
  }
)

export default function Layout({ children }: DashboardLayoutProps) {
  const {
    loading,
    error,
    data: homeTeamResponse,
  } = useQuery(
    gql`
      query NavigationRequest {
        teams {
          name
          gender
        }
      }
    `
  )

  const { data: sponsorsResponse } = useQuery(
    gql`
      query SponsorRequest {
        sponsors {
          name
          link
          image {
            url
          }
          sponsoring_rank
        }
      }
    `
  )

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DynamicNavigation teams={navigationItems} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">{children}</div>
      </div>

      <FooterWithSponsors sponsors={sponsors} />
    </>
  )
}
