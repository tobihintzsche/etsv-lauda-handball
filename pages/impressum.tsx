import client from '../apollo-client'
import React from 'react'

import { GET_CLUBS } from '../queries/clubQueries'
import { Club } from '../types/clubTypes'

import { head } from 'ramda'

interface ImprintProps {
  club: Club
}

export const Imprint = ({ club }: ImprintProps) => {
  return (
    <div
      className="text-md overflow-auto p-6 shadow-card md:text-lg whitespace-pre-wrap"
      dangerouslySetInnerHTML={{
        __html: club.imprint,
      }}
    />
  )
}

export default Imprint

interface ServerSideProps {
  props: {
    club: Club
  }
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const { data: clubResponse } = await client.query({
    query: GET_CLUBS,
  })

  const club: Club = head(clubResponse.clubs) as unknown as Club

  return {
    props: {
      club,
    },
  }
}
