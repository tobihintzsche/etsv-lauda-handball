import { gql } from '@apollo/client'
import { useEffect, useState } from 'react'
import client from '../../apollo-client'
import { TeamNewsComponent } from '../../components/TeamNews'
import { Team } from './[slug]'

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
  query TeamNewsRequest {
    teamsNews {
      id
      slug
      title
      description
      picture {
        url
      }
      team {
        name
      }
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

interface NewsPageProps {
  teamsNews: TeamNews[]
}

export default function NewsPage({ teamsNews }: NewsPageProps) {
  console.log(
    'news',
    teamsNews.map((singleNews) => singleNews.title)
  )

  const [filteredData, setFilteredData] = useState<TeamNews[]>([])
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredData(teamsNews)
      return
    }

    const filtered = teamsNews.filter((item: TeamNews) =>
      activeFilters.includes(item.team.name)
    )
    setFilteredData(filtered)
  }, [activeFilters, teamsNews])

  const handleFilterClick = (teamName: string) => {
    if (activeFilters.includes(teamName)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== teamName))
    } else {
      setActiveFilters([...activeFilters, teamName])
    }
  }

  const allTeams = Array.from(new Set(teamsNews.map((item) => item.team.name)))

  return (
    <div>
      <div>
        {allTeams.map((teamName: string) => (
          <button
            key={teamName}
            onClick={() => handleFilterClick(teamName)}
            className={`border rounded-md px-2 py-1 m-1 ${
              activeFilters.includes(teamName) ? 'bg-yellow-400' : ''
            }`}
          >
            {teamName}
          </button>
        ))}
      </div>
      <div className="py-10 grid gap-4 grid-cols-1 md:grid-cols-2 ">
        {filteredData.map((teamNews) => {
          return (
            <div>
              <TeamNewsComponent teamNews={teamNews} showLogo={false} />
            </div>
          )
        })}
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
  team: {
    name: string
  }
}

type ServerSideProps = {
  props: {
    teamsNews: TeamNews[]
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
  const { error, data: teamNewsResponse } = await client.query({
    query: GET_TEAM_NEWS,
  })

  console.log(teamNewsResponse.teamsNews)

  return {
    props: {
      teamsNews: teamNewsResponse.teamsNews,
    },
  }
}
