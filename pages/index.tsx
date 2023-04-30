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
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-2">
          <TeamNewsComponent teamNews={latestHomeTeamNews} />
        </div>
        {team.handball_net_configuration?.table_script && (
          <div className="flex-1">
            {team.handball_net_configuration.table_script && (
              <Table
                table_script={team.handball_net_configuration.table_script}
                name={team.name}
              />
            )}
          </div>
        )}
      </div>
      <div className="pt-10">
        <ClubInformation club={club} />
      </div>
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

  const { data: teamRequestResponse } = await client.query({
    query: SINGLE_TEAM_QUERY,
    variables: { slug: teamSlug },
  })

  const latestTeamNewsId: string = teamRequestResponse.team.teamsNews[0].id

  const { error, data: teamNewsResponse } = await client.query({
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
      team: teamRequestResponse.team,
      club,
    },
  }
}
