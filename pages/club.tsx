/* eslint-disable @next/next/no-img-element */
import React from 'react'
import client from '../apollo-client'

import { GET_CLUBS } from '../queries/clubQueries'
import { Club } from '../types/clubTypes'

interface ClubPageProps {
  club: Club
}

export default function ClubPage({ club }: ClubPageProps) {
  const { name, telephone, eMail } = club.manager
  return (
    <div className="p-6 shadow-card">
      <ClubBanner club={club} />
      <div
        className="text-lg md:text-xl pb-8 lg:pb-10 whitespace-pre-wrap"
        dangerouslySetInnerHTML={{
          __html: club.description,
        }}
      />

      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="text-lg lg:text-xl">
          <div className="text-2xl">ABTEILUNGSLEITER</div>

          <div>{name}</div>
          <div>Telefon: {telephone}</div>
          <div>E-Mail: {eMail}</div>
        </div>

        <div className="h-full">
          <img className="h-max" src={club.logo.url} alt={club.name} />
        </div>
      </div>
    </div>
  )
}

export interface ClubBannerProps {
  club: Club
}

export const ClubBanner: React.FC<ClubBannerProps> = ({ club }) => {
  const { name, subline } = club
  return (
    <div className="flex pb-4 flex-col w-full lg:w-max">
      <h1 className="text-3xl pb-2 lg:pb-0 lg:text-5xl">
        {name.toUpperCase()}
      </h1>
      <div className="bg-black lg:bg-inherit -mx-6 lg:mx-0 py-2 lg:py-0">
        <div className="px-6 lg:px-0">
          <h2 className="text-2xl lg:text-4xl text-primary bg-origin-padding lg:bg-black lg:shadow-[0px_0px_0px_6px_rgba(0,0,0,1)]">
            {subline}
          </h2>
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
