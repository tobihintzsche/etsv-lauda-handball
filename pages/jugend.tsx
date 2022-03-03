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

// var string = "this is a string";
// var length = 7;
// var trimmedString = string.substring(0, length);

export default function herren({ beitraege }) {
  return (
    <>
    
      <BeitragComponent
        title={beitraege[0].title}
        date={beitraege[0].date}
        description={beitraege[0].description.substring(0,200)}
        image={beitraege[0].image}
      />
      <div className="flex flex-col md:flex-row w-5/6 justify-between mx-auto">
        <div className="md:mr-3">
          <BeitragComponentSmall
            title={beitraege[1].title}
            date={beitraege[1].date}
            description={beitraege[1].description.substring(0,200)}
            image={beitraege[1].image}
          />
        </div>
        <div className="md:ml-3">
          <BeitragComponentSmall
            title={beitraege[0].title}
            date={beitraege[0].date}
            description={beitraege[0].description.substring(0,200)}
            image={beitraege[0].image}
          />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query beitrag {
        beitraege(where: { zuweisung: "Herren" }, last: 3) {
          id
          title
          slug
          description
          image
        }
      }
    `,
  })

  //console.log(data)

  return {
    props: {
      beitraege: data.beitraege.slice(0, 4),
    },
  }
}
