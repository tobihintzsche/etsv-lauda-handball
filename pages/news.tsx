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
import EventSmall from '../components/eventSmall'
import SponsorSmall from '../components/sponsorSmall copy'
import sponsoren from './sponsoren'
import BeitragComponentSmall from '../components/beitragSmall'
import InfoBarRight from '../components/infoBarRight'

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

export default function news({ beitraege, termine, sponsoren }) {
  return (
    <>
      <h1
        className="text-3xl font-bold italic bg-amber-300
         pt-3 pb-3 text-center"
      >
        NEWS
      </h1>
      <div
        style={{ width: '90%' }}
        className=" mx-auto md:justify-between md:flex"
      >

      <div
      >
         <div
          style={{ width: '90%' }}
          className="mx-auto pt-3 grid grid-cols-2 gap-4"
        >

          {beitraege.map((beitrag) => {
            return (
              <div className='max-h-90'>

              <BeitragComponentSmall
                title={beitrag.title}
                date={beitrag.date}
                description={beitrag.description.substring(0, 200)}
                image={beitrag.image}
                slug={beitrag.slug}
              />
              
</div>
            )
          })}
        </div>

      </div>
      <div>
      <InfoBarRight termine={termine} sponsoren={sponsoren} />

      </div>
      </div>

    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query beitrag {
        beitraege(last: 10) {
          id
          title
          slug
          description
          image
        }
        sponsoren {
          id
          name
          image
          slug
        }
        termine(last: 3) {
          eventTitle
          dateAndTime
          location
        }
      }
    `,
  })

  return {
    props: {
      beitraege: data.beitraege,
      termine: data.termine, 
      sponsoren: data.sponsoren,
    },
  }
}
