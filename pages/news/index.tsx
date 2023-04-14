import { useEffect, useState } from 'react'
import client from '../../apollo-client'
import { TeamNewsComponent } from '../../components/Team/TeamNews'
import { GET_TEAMS_NEWS } from '../../queries/teamNewsQueries'
import { TeamNews } from '../../types/teamNewsTypes'

interface NewsPageProps {
  teamsNews: TeamNews[]
}

export default function NewsPage({ teamsNews }: NewsPageProps) {
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
          <FilterButton
            teamName={teamName}
            activeFilters={activeFilters}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </div>
      <div className="py-10 grid gap-4 grid-cols-1 md:grid-cols-2 ">
        {filteredData.map((teamNews, index) => {
          return (
            <div key={index}>
              <TeamNewsComponent teamNews={teamNews} showLogo={false} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export interface FilterButtonProps {
  teamName: string
  handleFilterClick: (value: string) => void
  activeFilters: string[]
}

const FilterButton: React.FC<FilterButtonProps> = ({
  teamName,
  handleFilterClick,
  activeFilters,
}) => {
  return (
    <button
      key={teamName}
      onClick={() => handleFilterClick(teamName)}
      className={`border rounded-md px-2 py-1 m-1 ${
        activeFilters.includes(teamName) ? 'bg-yellow-400' : ''
      }`}
    >
      {teamName}
    </button>
  )
}

type ServerSideProps = {
  props: {
    teamsNews: TeamNews[]
  }
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const { error, data: teamNewsResponse } = await client.query({
    query: GET_TEAMS_NEWS,
  })

  return {
    props: {
      teamsNews: teamNewsResponse.teamsNews,
    },
  }
}
