import client from '../../apollo-client'
import { Gameplan } from '../../components/HandballNet/Gameplan'
import { Table } from '../../components/HandballNet/Table'
import { TeamNewsComponent } from '../../components/Team/TeamNews'

import Link from 'next/link'
import Image from 'next/image'
import { SINGLE_TEAM_QUERY } from '../../queries/teamQueries'
import { Team } from '../../types/teamTypes'
import { GET_TEAM_NEWS } from '../../queries/teamNewsQueries'
import { TeamNews } from '../../types/teamNewsTypes'
import TeamInformation from '../../components/Team/TeamInformationElement'

export interface TeamOverviewPageProps {
  team: Team
  latestTeamNews: TeamNews
}

const TeamOverviewPage: React.FC<TeamOverviewPageProps> = ({
  team,
  latestTeamNews,
}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="flex-2 flex flex-col gap-8">
        <div>
          <div className="text-4xl lg:text-5xl">{team.name.toUpperCase()}</div>
          <div className="shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
            <img
              className="object-cover w-full h-full"
              src={team.team_picture.url}
              alt={team.name}
            />
            {team.team_picture_description && (
              <p className="py-6 px-6 text-lg md:text-xl">
                {team.team_picture_description}
              </p>
            )}
          </div>
        </div>
        <TeamInformation team={team} />
        {latestTeamNews && (
          <div>
            <h1 className="text-3xl lg:text-4xl pb-4">NEWS</h1>
            <TeamNewsComponent showLogo={true} teamNews={latestTeamNews} />
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row xl:flex-col gap-10 flex-1">
        <Table team={team} />
        <Gameplan team={team} />
      </div>
    </div>
  )
}

type ServerSideProps = {
  props: {
    team: Team
    latestTeamNews: TeamNews
  }
}

export async function getServerSideProps({
  params,
}: any): Promise<ServerSideProps> {
  const slug = params.slug as string

  const { data } = await client.query({
    query: SINGLE_TEAM_QUERY,
    variables: { slug },
  })

  const latestTeamNewsId: string = data.team.teamsNews[0].id

  const { error, data: teamNewsResponse } = await client.query({
    query: GET_TEAM_NEWS,
    variables: { id: latestTeamNewsId },
  })

  return {
    props: {
      team: data.team,
      latestTeamNews: teamNewsResponse.teamNews,
    },
  }
}

export default TeamOverviewPage
