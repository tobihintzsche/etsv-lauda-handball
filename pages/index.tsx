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

export default function home({ beitraege, termine, sponsoren }) {
  return (
    <>
      <div
        style={{ width: '90%' }}
        className=" mx-auto md:justify-between md:flex"
      >
        <div className="pt-3 md:pr-3">
          <BeitragComponent
            title={beitraege[2].title}
            date={beitraege[2].date}
            description={beitraege[2].description.substring(0, 200)}
            image={beitraege[2].image}
            slug={beitraege[0].slug}
          />
          <div className="flex flex-col md:flex-row  justify-between mx-auto">
            <div className="md:mr-3">
              <BeitragComponentSmall
                title={beitraege[1].title}
                date={beitraege[1].date}
                description={beitraege[1].description.substring(0, 200)}
                image={beitraege[1].image}
                slug={beitraege[1].slug}
              />
            </div>
            <div className="md:ml-3">
              <BeitragComponentSmall
                title={beitraege[0].title}
                date={beitraege[0].date}
                description={beitraege[0].description.substring(0, 200)}
                image={beitraege[0].image}
                slug={beitraege[0].slug}
              />
            </div>
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
      query termin {
        termine(where: { zuweisung: Herren }, last: 3) {
          eventTitle
          dateAndTime
          location
        }
        beitraege(last: 3) {
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
      }
    `,
  })

  return {
    props: {
      beitraege: data.beitraege.slice(0, 4),
      termine: data.termine.slice(0, 4),
      sponsoren: data.sponsoren.slice(0, 4),
    },
  }
}
