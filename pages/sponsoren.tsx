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

export default function alleSponsoren({ sponsoren }) {
  return (
    <>
  
    <h1 className='text-5xl bg-amber-300
    pb-3 pt-3 text-center'>SPONSOREN</h1>
    <div style={{width: "90%"}}className=" mx-auto md:justify-between">

      {sponsoren.map(sponsor => {
        return( 
          <div key={sponsor.name} className="w-4/5 mx-auto flex justify-center border-2 mt-3">
            <img src={sponsor.image} alt={sponsor.name} />
          </div>
        )
       } ) }
        
      

    
    
    </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query sponsor {
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
      sponsoren: data.sponsoren.slice(0, 4),
    },
  }
}
