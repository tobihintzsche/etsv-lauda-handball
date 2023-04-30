import { useEffect, useState } from 'react'
import client from '../../apollo-client'
import { TeamNewsComponent } from '../../components/Team/TeamNews'
import { GET_TEAMS_NEWS } from '../../queries/teamNewsQueries'
import { TeamNews } from '../../types/teamNewsTypes'
import React from 'react'

interface NewsPageProps {
  teamsNews: TeamNews[]
}

export default function NewsPage({ teamsNews }: NewsPageProps) {
  const [filteredData, setFilteredData] = useState<TeamNews[]>([])
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [loadMoreCounter, setLoadMoreCounter] = useState(1)
  const [initialPaginationData, setInitialPaginationData] = useState<
    TeamNews[]
  >([])
  const [paginationData, setPaginationData] = useState<TeamNews[]>(
    initialPaginationData
  )
  const PAGE_SIZE = 4
  const showLoadMoreButton = loadMoreCounter * PAGE_SIZE < filteredData.length

  const allTeams = Array.from(new Set(teamsNews.map((item) => item.team.name)))

  const firstHighlightClassName = 'ml-4'
  const lastHighlightClassName = 'mr-4'

  useEffect(() => {
    if (activeFilters.length === 0) {
      setFilteredData(teamsNews)
      setInitialPaginationData(teamsNews.slice(0, 4))
      return
    }

    const filtered = teamsNews.filter((item: TeamNews) =>
      activeFilters.includes(item.team.name)
    )
    setFilteredData(filtered)
    setInitialPaginationData(filtered.slice(0, 4))
  }, [activeFilters, teamsNews])

  const handleFilterClick = (teamName: string) => {
    if (activeFilters.includes(teamName)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== teamName))
    } else {
      setActiveFilters([...activeFilters, teamName])
    }
  }

  function loadMore() {
    setLoadMoreCounter(loadMoreCounter + 1)
    const sliceStart = loadMoreCounter * PAGE_SIZE
    const sliceEnd = sliceStart + PAGE_SIZE
    setPaginationData([
      ...paginationData,
      ...filteredData.slice(sliceStart, sliceEnd),
    ])
  }

  useEffect(() => {
    setPaginationData(filteredData.slice(0, PAGE_SIZE))
    setLoadMoreCounter(1)
    setInitialPaginationData(filteredData.slice(0, PAGE_SIZE))
  }, [activeFilters, filteredData])

  return (
    <div>
      <h1 className="text-3xl lg:text-4xl">ALLE NEWS</h1>
      <div className="flex overflow-scroll whitespace-nowrap -mx-4 pb-4">
        {allTeams.map((teamName: string, index) => {
          let highlightClassName
          if (index === allTeams.length - 1)
            highlightClassName = lastHighlightClassName
          if (index === 0) highlightClassName = firstHighlightClassName
          return (
            <FilterButton
              key={index}
              className={highlightClassName}
              teamName={teamName}
              activeFilters={activeFilters}
              handleFilterClick={handleFilterClick}
            />
          )
        })}
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
        {paginationData.map((teamNews, index) => {
          return (
            <div key={index}>
              <TeamNewsComponent teamNews={teamNews} showLogo={false} />
            </div>
          )
        })}
      </div>
      {showLoadMoreButton && (
        <div className="flex justify-center pt-4">
          <button
            className="bg-yellow-400 rounded-md p-2 text-xl lg:text-2xl"
            onClick={loadMore}
          >
            Weitere Beiträge
          </button>
        </div>
      )}
    </div>
  )
}

export interface FilterButtonProps {
  teamName: string
  handleFilterClick: (value: string) => void
  activeFilters: string[]
  className?: string
}

const FilterButton: React.FC<FilterButtonProps> = ({
  teamName,
  handleFilterClick,
  activeFilters,
  className,
}) => {
  return (
    <div className={className}>
      <button
        key={teamName}
        onClick={() => handleFilterClick(teamName)}
        className={`border-2 rounded-md text-xl lg:text-2xl px-2 py-1 m-1 ${
          activeFilters.includes(teamName) ? 'bg-yellow-400' : ''
        }`}
      >
        {teamName}
      </button>
    </div>
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
