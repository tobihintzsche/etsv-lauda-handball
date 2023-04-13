import client from '../../apollo-client'

import { Team } from '../../types/teamTypes'
import { TeamNews } from '../../types/teamNewsTypes'
import { GET_TEAM_NEWS } from '../../queries/teamNewsQueries'

export interface TeamOverviewPageProps {
  team: Team
  news: TeamNews
}

const TeamOverviewPage: React.FC<TeamOverviewPageProps> = ({ news }) => {
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

  return {
    props: {
      news: newsResponse.teamNews,
    },
  }
}

export default TeamOverviewPage
