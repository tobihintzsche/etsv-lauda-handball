import React, { useState } from 'react'
import Image from 'next/image'
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
import Script from 'next/script'
import Beitrag from './events/[slug]'
import BeitragComponent from '../components/beitrag'
import EventSmall from '../components/eventSmall'
import SponsorSmall from '../components/sponsorSmall copy'
import sponsoren from './sponsoren'
import BeitragComponentSmall from '../components/beitragSmall'
import InfoBarRight from '../components/infoBarRight'
import TestTable from '../components/spielplan'
import Spielplan from '../components/spielplan'
import Tabelle from '../components/tabelle'
import InformationElement from '../components/TeamInformationElement'
import TeamInformationElement from '../components/TeamInformationElement'
import TeamsOverview from '../components/TeamsOverview'

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

const Home = ({ beitraege, termine, sponsoren }) => {
  return (
    <div>
      <div className="flex mt-4 h-max gap-10">
        <div className="flex-2">
          <BeitragComponent
            title={beitraege[2].title}
            date={beitraege[2].date}
            description={beitraege[2].description.substring(0, 200)}
            image={beitraege[2].image}
            slug={beitraege[0].slug}
          />
        </div>

        <div className="flex-1">
          <Tabelle />
        </div>
      </div>

      <div className="flex gap-10 mb-4 mt-4"></div>
    </div>
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

export default Home
