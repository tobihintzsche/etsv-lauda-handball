import client from '../../apollo-client'
import { Gameplan } from '../../components/HandballNet/Gameplan'
import { TeamNewsComponent } from '../../components/Team/TeamNews'
import React from 'react'

import Link from 'next/link'
import { SINGLE_TEAM_QUERY } from '../../queries/teamQueries'
import { Team } from '../../types/teamTypes'
import { GET_TEAM_NEWS } from '../../queries/teamNewsQueries'
import { TeamNews } from '../../types/teamNewsTypes'
import TeamInformation from '../../components/Team/TeamInformationElement'
import { ApolloError } from '@apollo/client'
import { Table } from '../../components/HandballNet/Table'
import Image from 'next/image'

export interface TeamOverviewPageProps {
  team: Team
  latestTeamNews: TeamNews
}

const TeamOverviewPage: React.FC<TeamOverviewPageProps> = ({
  team,
  latestTeamNews,
}) => {
  if (!team) {
    return (
      <p>
        Das gesuchte Team existiert nicht, bitte überprüfen Sie ihre Eingaben
        oder wählen Sie ein Team aus der Navigation aus.
      </p>
    )
  }

  const {
    name,
    team_picture,
    team_picture_description,
    handball_net_configuration,
  } = team

  const table_script = handball_net_configuration?.table_script
  const gameplan_script = handball_net_configuration?.gameplan_script

  return (
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="flex-2 flex flex-col gap-8">
        {/* Image */}
        <div>
          <div className="text-3xl lg:text-5xl">{name.toUpperCase()}</div>
          <div className="shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              className="object-cover w-full h-full"
              src={team_picture.url}
              alt={name}
              width={400}
              height={300}
            />
            {team_picture_description && (
              <p className="py-6 px-6 text-md md:text-lg">
                {team_picture_description}
              </p>
            )}
          </div>
        </div>

        <TeamInformation team={team} />

        <div>
          <h1 className="text-3xl lg:text-4xl">NEWS</h1>
          <TeamNewsComponent showLogo={true} teamNews={latestTeamNews} />
          <div className="flex justify-center pt-4">
            <Link href={'/news'}>
              <button className="bg-primary-200 rounded-md p-2 text-xl lg:text-2xl">
                ZU ALLEN NEWS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {(table_script || gameplan_script) && (
        <div className="flex-1 flex flex-col gap-8">
          {table_script && <Table table_script={table_script} name={name} />}
          {gameplan_script && (
            <Gameplan gameplan_script={gameplan_script} name={name} />
          )}
        </div>
      )}
    </div>
  )
}

type ServerSideProps = {
  props: {
    team: Team | null
    latestTeamNews: TeamNews | null
  }
}

export async function getServerSideProps({
  params,
}: any): Promise<ServerSideProps> {
  const slug = params.slug as string

  try {
    const { data } = await client.query({
      query: SINGLE_TEAM_QUERY,
      variables: { slug },
    })

    try {
      const latestTeamNewsId: string = data.team.teamsNews[0].id

      const { data: teamNewsResponse } = await client.query({
        query: GET_TEAM_NEWS,
        variables: { id: latestTeamNewsId },
      })

      return {
        props: {
          team: data.team,
          latestTeamNews: teamNewsResponse.teamNews,
        },
      }
    } catch (error) {
      return {
        props: {
          team: data.team,
          latestTeamNews: null,
        },
      }
    }
  } catch (error: any) {
    if (error instanceof ApolloError) {
      // Handle Apollo-specific errors here
      console.error('ApolloError:', error.message)
    } else {
      // Handle generic errors here
      console.error('Error:', error.message)
    }

    // Return a fallback value or redirect to an error page
    return {
      props: {
        team: null,
        latestTeamNews: null,
      },
    }
  }
}

export default TeamOverviewPage
