import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from 'swr'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import { renderToHTML } from 'next/dist/server/render'
import BeitragComponent from '../components/beitrag'
import EventSmall from '../components/eventSmall'
import SponsorSmall from '../components/sponsorSmall copy'
import BeitragComponentSmall from '../components/beitragSmall'

interface IBeitrag {
  id: string
  slug: string
  title: string
  date: string
  description: string
  image: string
  zuweisung: string
}

interface IBeitraege {
  beitrag: IBeitrag[]
}

const endpoint =
  'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master'

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
})

console.log(client)

export default function InfoBarRight({ termine, sponsoren }) {
  return (
    <>
      <div>
        <EventSmall
          eventTitle={termine[0].eventTitle}
          dateAndTime={termine[0].dateAndTime}
          location={termine[0].location}
        />
        <EventSmall
          eventTitle={termine[1].eventTitle}
          dateAndTime={termine[1].dateAndTime}
          location={termine[1].location}
        />
        <EventSmall
          eventTitle={termine[2].eventTitle}
          dateAndTime={termine[2].dateAndTime}
          location={termine[2].location}
        />
        <SponsorSmall image={sponsoren[0].image} slug={sponsoren[0].slug} />
        <SponsorSmall image={sponsoren[1].image} slug={sponsoren[1].slug} />
      </div>
    </>
  )
}



  

