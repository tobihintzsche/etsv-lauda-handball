import { gql } from '@apollo/client'
import client from '../apollo-client'
import ClubInformation from '../components/ClubInformation'
import { Navigation } from '../components/Navbar/Navigation'
import { TeamNewsComponent } from '../components/TeamNews'
import { Team } from './teams/[slug]'

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
      teamsNews {
        id
      }
    }
  }
`

const GET_HOME_TEAM = gql`
  query HomeRequest {
    homes {
      team {
        id
        slug
      }
    }
  }
`

export const GET_TEAM_NEWS = gql`
  query TeamNewsRequest($id: ID!) {
    teamNews(where: { id: $id }) {
      id
      slug
      title
      description
      picture {
        url
      }
      createdAt
    }
  }
`

const GET_CLUBS = gql`
  query ClubsRequest {
    clubs {
      description
      id
      name
      logo {
        url
      }
      picture {
        url
      }
      home_description
      subline
    }
  }
`

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
  console.log(club)

  return (
    <div className="py-10 flex flex-col">
      <div className="flex flex-col lg:flex-row gap-4">
        <div>
          <TeamNewsComponent teamNews={latestHomeTeamNews} />
        </div>
        <div>
          <TeamNewsComponent teamNews={latestHomeTeamNews} />
        </div>
      </div>
      <div className="pt-10">
        <ClubInformation club={club} />
      </div>
    </div>
  )
}
export interface TeamNews {
  id: string
  slug: string | null
  title: string
  description: string
  picture: {
    url: string
  }
  createdAt: Date
}

type ServerSideProps = {
  props: {
    latestHomeTeamNews: TeamNews
    team: Team
    club: Club
  }
}

export interface Club {
  description: string
  id: string
  name: string
  logo: {
    url: string
  }
  picture: {
    url: string
  }
  home_description: string
  subline: string
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const { data: homeRequestResponse } = await client.query({
    query: GET_HOME_TEAM,
  })

  const teamSlug = homeRequestResponse.homes[0].team.slug

  const id: string = 'clg6oq15nkopb0auhflp1wmrc'

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
