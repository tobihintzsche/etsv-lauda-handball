import client from '../apollo-client'
import React from 'react'

import { GET_CLUBS } from '../queries/clubQueries'
import { Club } from '../types/clubTypes'
import { head } from 'ramda'

interface PrivacyContentProps {
  club: Club
}

export const PrivacyContent = ({ club }: PrivacyContentProps) => {
  return (
    <div
      className="text-md overflow-auto md:text-lg p-6 shadow-card whitespace-pre-wrap"
      dangerouslySetInnerHTML={{
        __html: club.privacy_content,
      }}
    />
  )
}

export default PrivacyContent

interface ServerSideProps {
  props: {
    club: Club
  }
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const { data: clubResponse } = await client.query({
    query: GET_CLUBS,
  })

  const club = head(clubResponse.clubs) as unknown as Club

  return {
    props: {
      club,
    },
  }
}
