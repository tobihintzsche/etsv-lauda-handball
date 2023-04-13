import client from '../apollo-client'

import { GET_CLUBS } from '../queries/clubQueries'
import { Club } from '../types/clubTypes'

interface ClubPageProps {
  club: Club
}

export default function ClubPage({ club }: ClubPageProps) {
  return (
    <div className="p-6 shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
      <div className="flex pb-8 flex-col w-full lg:w-max">
        <h1 className="text-4xl pb-2 lg:pb-0 lg:text-5xl">
          {club.name.toUpperCase()}
        </h1>
        <div className="bg-black lg:bg-inherit -mx-6 lg:mx-0 py-2 lg:py-0">
          <div className="px-6 lg:px-0">
            <h2 className="text-2xl lg:text-4xl text-yellow-400 bg-origin-padding lg:bg-black lg:shadow-[0px_0px_0px_6px_rgba(0,0,0,1)]">
              {club.subline}
            </h2>
          </div>
        </div>
      </div>
      <div
        className="text-2xl pb-10 whitespace-pre-wrap"
        dangerouslySetInnerHTML={{
          __html: club.description,
        }}
      />

      <div className="flex">
        <div
          className="text-2xl whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: club.manager,
          }}
        />
        <div className="h-full flex-grow">
          <img className="h-max" src={club.logo.url} alt={club.name} />
        </div>
      </div>
    </div>
  )
}

interface ServerSideProps {
  props: {
    club: Club
  }
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const { data: clubResponse } = await client.query({
    query: GET_CLUBS,
  })

  const club = clubResponse.clubs[0]

  return {
    props: {
      club,
    },
  }
}
