import client from '../../apollo-client'

import React from 'react'

import { Team } from '../../types/teamTypes'
import { TeamNews } from '../../types/teamNewsTypes'
import { GET_TEAM_NEWS } from '../../queries/teamNewsQueries'
import { formatTimestamp } from '../../utils/formatTimestamp'

export interface TeamOverviewPageProps {
  team: Team
  news: TeamNews
}

const TeamOverviewPage: React.FC<TeamOverviewPageProps> = ({ news }) => {
  return (
    <div className="flex gap-6 flex-col lg:flex-row shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
      <div className="lg:flex-3 py-6 px-6">
        <h1 className="text-4xl lg:text-5xl">{news.title.toUpperCase()}</h1>
        <div>{formatTimestamp(news.createdAt)}</div>

        <div className="text-lg lg:text-xl leading-8 pt-4">
          {news.description}
        </div>
      </div>

      <div className="lg:flex-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
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

  return {
    props: {
      news: newsResponse.teamNews,
    },
  }
}

export default TeamOverviewPage
