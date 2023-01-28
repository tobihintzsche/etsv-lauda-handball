import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from 'swr'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Beitrag from './events/[slug]'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import { renderToHTML } from 'next/dist/server/render'
import BeitragComponent from '../components/beitrag'
import BeitragComponentSmall from '../components/beitragSmall'
import EventSmall from '../components/eventSmall'

interface IBeitrag {
  id: string
  slug: string
  title: string
  date: string
  description: string
  image: string
  zuweisung: string
}

interface Itermine {
  beitrag: IBeitrag[]
}

const endpoint =
  'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master'

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
})

// var string = "this is a string";
// var length = 7;
// var trimmedString = string.substring(0, length);

export default function termine({ termine }) {
  return (
    <>
      <EventSmall
        eventTitle={termine[0].eventTitle}
        dateAndTime={termine[0].dateAndTime}
        location={termine[0].location}
      />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query termin {
        termine(where: { zuweisung: Herren }, last: 3) {
          eventTitle
          dateAndTime
          location
        }
      }
    `,
  })

  return {
    props: {
      termine: data.termine.slice(0, 4),
    },
  }
}
