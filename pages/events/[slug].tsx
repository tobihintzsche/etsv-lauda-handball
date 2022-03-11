import React from 'react'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from 'swr'
import { GraphQLClient, gql } from 'graphql-request'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import BeitragComponent from '../../components/beitrag'
import BeitragComponentSmall from '../../components/beitragSmall'
import InfoBarRight from '../../components/infoBarRight'

interface IBeitrag {
  id: string
  slug: string
  title: string
  date: string
  description: string
  image: string
  zuweisung: string
}

interface ITermin { 
  eventTitle: string 
  location: string 
  dateAndTime: string
  slug: string
  zuweisung: string
}

interface IBeitraege {
  beitraege: IBeitrag[]
}

const client = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master'
)

export default function Beitrag({beitrag, termine, sponsoren}) {


  
  
  return (
    <>
 
 <h1 className='text-5xl bg-amber-300
    pb-3 pt-3 text-center'>HERREN</h1>
    <div style={{width: "90%"}}className=" mx-auto md:justify-between md:flex">
    
      <div className='pt-3 md:pr-3'>
      
      <h1>{beitrag.title}</h1>
      <h2>{beitrag.date}</h2>
      <h2>
        {beitrag.description}
      </h2>
      <img src={beitrag.image} alt={beitrag.title} />
      

      </div>

     <div>
       <InfoBarRight termine={termine} sponsoren={sponsoren} /> 
     </div>
    </div>

    </>
  )
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string

  const query = gql`
    query beitrag($slug: String!) {
      beitrag(where: { slug: $slug }) {
        id
        slug
        title
        date
        description
        image
      }
      termine(where: { zuweisung: Herren }, last: 3) {
        eventTitle
        dateAndTime
        location
      }
      beitraege(where: { zuweisung: "Herren" }, last: 3) {
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
  `
  const data = await client.request(query, {
    slug,
  })

  // Handle beitrag slugs which don't exist in our CMS
  if (!data.beitrag) {
    return {
      notFound: true,
    }
  }

  // Convert the Markdown into a compiled source used by MDX
  const source = await serialize(data.beitrag.description)

  console.log(data.beitrag);
  console.log(data.termine[0].eventTitle);
  console.log(data.sponsoren);
  


  // Provide Props to the Page Component
  return {
    props: { sponsoren: data.sponsoren, termine: data.termine,  beitrag: data.beitrag,  },
    revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
    
  }

  
}



export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query beitrag {
      beitraege {
        slug
      }
    }
  `

  const data = await client.request(query)

  console.log(data)

  return {
    paths: data.beitraege.map((beitrag: IBeitrag) => ({
      params: { slug: beitrag.slug },
    })),
    fallback: 'blocking',
  }
}
