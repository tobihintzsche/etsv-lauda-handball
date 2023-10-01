import client from '../apollo-client'
import React from 'react'

import ClubInformation from '../components/Team/ClubInformation'
import { TeamNewsComponent } from '../components/Team/TeamNews'
import { GET_CLUBS } from '../queries/clubQueries'
import { GET_TEAM_NEWS } from '../queries/teamNewsQueries'
import { GET_HOME_TEAM, SINGLE_TEAM_QUERY } from '../queries/teamQueries'
import { Team } from '../types/teamTypes'
import { TeamNews } from '../types/teamNewsTypes'
import { Club } from '../types/clubTypes'
import { Table } from '../components/HandballNet/Table'
import classNames from 'classnames'

interface HomePageProps {
  team: Team
  latestHomeTeamNews: TeamNews
  club: Club
}

export default function HomePage({
  latestHomeTeamNews,
  team,
  club,
}: HomePageProps) {
  const { name, handball_net_configuration } = team
  const table_script = handball_net_configuration?.table_script

  return (
    <div
      className={classNames(
        'flex gap-8',
        table_script ? 'flex-col' : 'flex-col lg:flex-row gap-8'
      )}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-2">
          <TeamNewsComponent teamNews={latestHomeTeamNews} />
        </div>
        {table_script && (
          <div className="flex-1">
            <Table table_script={table_script} name={name} />
          </div>
        )}
      </div>
      <ClubInformation club={club} isSmall={table_script === undefined} />
    </div>
  )
}

type ServerSideProps = {
  props: {
    latestHomeTeamNews: TeamNews
    team: Team
    club: Club
  }
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const { data: homeRequestResponse } = await client.query({
    query: GET_HOME_TEAM,
  })

  const teamSlug = homeRequestResponse.homes[0].team.slug

  const { data: teamResponse } = await client.query({
    query: SINGLE_TEAM_QUERY,
    variables: { slug: teamSlug },
  })

  const latestTeamNewsId: string = teamResponse.team.teamsNews[0].id

  const { data: teamNewsResponse } = await client.query({
    query: GET_TEAM_NEWS,
    variables: { id: latestTeamNewsId },
  })

  const { data: clubResponse } = await client.query({
    query: GET_CLUBS,
  })

  const club = clubResponse.clubs[0]

  return {
    props: {
      latestHomeTeamNews: teamNewsResponse.teamNews,
      team: teamResponse.team,
      club,
    },
  }
}
