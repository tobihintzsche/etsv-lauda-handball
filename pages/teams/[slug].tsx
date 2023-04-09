import { useQuery, QueryResult } from '@apollo/client'
import { NOTFOUND } from 'dns'
import gql from 'graphql-tag'
import { GET_TEAM_NEWS } from '..'
import client from '../../apollo-client'
import { Gameplan } from '../../components/Gameplan'
import { Table } from '../../components/Table'
import { TeamNewsComponent } from '../../components/TeamNews'

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

export interface TeamNews {
  id: string
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
  latestTeamNews: TeamNews
}

const TeamOverviewPage: React.FC<TeamOverviewPageProps> = ({
  team,
  latestTeamNews,
}) => {
  console.log(latestTeamNews)

  return (
    <div className="flex py-8 gap-10">
      <div className="flex-2 flex flex-col gap-4">
        {/* Herren plus Foto */}
        <div>
          <div className="text-6xl">{team.name.toUpperCase()}</div>
          <div className="shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
            <img
              className="object-cover w-full h-full"
              src={team.team_picture.url}
              alt={team.name}
            />
            {team.team_picture_description && (
              <p className="py-6 px-6 text-xl">
                {team.team_picture_description}
              </p>
            )}
          </div>
        </div>
        {/* Trainer Info */}
        <div className="p-12 flex shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
          <div className="flex-1">
            <h2 className="text-3xl">Trainer:</h2>
            <div className="flex flex-col gap-2">
              {team.coaches.map((coach) => {
                return <div>{coach}</div>
              })}
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h2 className="text-3xl">Trainingszeiten:</h2>
              <div className="flex flex-col gap-2">
                {team.practice_times.map((practiceTime) => {
                  return <div>{practiceTime}</div>
                })}
              </div>
            </div>
            <div>
              <h2 className="text-3xl">Social Media:</h2>
              {team.social_media.facebook}
              {team.social_media.instagram}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl">NEWS</h1>
          <TeamNewsComponent teamNews={latestTeamNews} />
        </div>
      </div>

      <div className="flex-1">
        <Table team={team} />
        <Gameplan team={team} />
      </div>
    </div>
  )
}

const SINGLE_TEAM_QUERY = gql`
  query SingleTeamRequest($slug: String!) {
    team(where: { slug: $slug }) {
      name
      gender
      practice_times
      coaches
      handball_net_configuration {
        gameplan_script
        table_script
      }
      slug
      social_media {
        instagram
        facebook
      }
      team_picture {
        url
      }
      team_picture_description
      teamsNews {
        id
      }
    }
  }
`

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
