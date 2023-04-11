import { useQuery, QueryResult } from '@apollo/client'
import { NOTFOUND } from 'dns'
import gql from 'graphql-tag'
import { GET_TEAM_NEWS, TeamNews } from '..'
import client from '../../apollo-client'
import { Gameplan } from '../../components/Gameplan'
import { Table } from '../../components/Table'
import { TeamNewsComponent } from '../../components/TeamNews'

import InstagramLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Instagram_Logo.svg'
import FacebookLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Facebook_Logo.svg'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export interface HandballNetConfiguration {
  gameplan_script: string
  table_script: string
}

export interface SocialMedia {
  instagram: string
  facebook: string
}

export interface HygraphPicture {
  url: string
}

export interface Team {
  id: string
  name: string
  gender: 'Maennlich' | 'Weiblich' | 'Gemischt'
  practice_times: string[]
  coaches: string[]
  handball_net_configuration: HandballNetConfiguration
  slug: string
  social_media: SocialMedia
  team_picture: HygraphPicture
  team_picture_description: string
  teamsNews: TeamNews[]
}

export interface TeamOverviewPageProps {
  team: Team
  news: TeamNews
}

const TeamOverviewPage: React.FC<TeamOverviewPageProps> = ({ news }) => {
  console.log(news)

  function formatTimestamp(timestamp: Date): string {
    const date = new Date(timestamp)
    const options: any = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }
    const formattedDate = date
      .toLocaleDateString('en-US', options)
      .replace(/\//g, '.')

    return formattedDate
  }

  return (
    <div className="flex gap-6 shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
      <div className="flex-3 py-6 pl-6">
        <h1 className="text-5xl">{news.title.toUpperCase()}</h1>
        <div>{formatTimestamp(news.createdAt)}</div>

        <div className="text-xl pt-4">{news.description}</div>
      </div>

      <div className="flex-2">
        <img
          className="h-full object-cover"
          src={news.picture.url}
          alt={news.title}
        />
      </div>
    </div>
  )
}

type ServerSideProps = {
  props: {
    news: TeamNews
  }
}

export async function getServerSideProps({
  params,
}: any): Promise<ServerSideProps> {
  const slug = params.slug as string

  const splittedSlug: string[] = slug.split('-')

  const { error, data: newsResponse } = await client.query({
    query: GET_TEAM_NEWS,
    variables: { id: splittedSlug[splittedSlug.length - 1] },
  })

  console.log(newsResponse)

  return {
    props: {
      news: newsResponse.teamNews,
    },
  }
}

export default TeamOverviewPage
