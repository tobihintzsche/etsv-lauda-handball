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

export default function herren({ beitraege }) {
  return (
    <div>
      {beitraege.map((beitrag) => (
        <div key={beitrag.id}>
          <BeitragComponent
            title={beitrag.title}
            date={beitrag.date}
            description={beitrag.description}
            image={beitrag.image}
          />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query beitrag {
        beitraege(where: { zuweisung: "Herren" }, last: 1) {
          id
          title
          slug
          description
          image
        }
      }
    `,
  })

  console.log(data)

  return {
    props: {
      beitraege: data.beitraege.slice(0, 4),
    },
  }
}
