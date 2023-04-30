import client from '../apollo-client'
import React from 'react'

import { GET_CLUBS } from '../queries/clubQueries'
import { Club } from '../types/clubTypes'

interface ImprintProps {
  club: Club
}

export default function Imprint({ club }: ImprintProps) {
  return (
    <div className="p-6 shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div
          className="text-md overflow-auto md:text-lg whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: club.imprint,
          }}
        />
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
