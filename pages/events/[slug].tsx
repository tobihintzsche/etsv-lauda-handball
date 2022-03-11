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

interface IBeitraege {
  beitraege: IBeitrag[]
}

const client = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master'
)

export default function Beitrag({ beitrag }: { beitrag: IBeitrag }) {
  return (
    <>

    <div>

    <h1 className='text-2xl font-bold bg-amber-300 '>{beitrag.title}</h1>
      <h5>{beitrag.date}</h5>
      <h3>{beitrag.description}</h3>
      <img src={beitrag.image} alt={beitrag.title} />

    </div>

    {/* <InfoBarRight />  */}

     
    </>
  )
}



// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const slug = params!.slug as string

//   const query = gql`
//     query beitrag($slug: String!) {
//       beitrag(where: { slug: $slug }) {
//         id
//         slug
//         title
//         date
//         description
//         image
//       }
//       termine(where: { zuweisung: Herren }, last: 3) {
//         eventTitle
//         dateAndTime
//         location
//       }
//       beitraege(where: { zuweisung: "Herren" }, last: 3) {
//         id
//         title
//         slug
//         description
//         image
//       }
//       sponsoren {
//         id
//         name
//         image
//         slug
//       }
//     }
//   `
//   const data: { beitrag: IBeitrag | null } = await client.request(query, {
//     slug,
//   })

//   // Handle beitrag slugs which don't exist in our CMS
//   if (!data.beitrag) {
//     return {
//       notFound: true,
//     }
//   }

//   // Convert the Markdown into a compiled source used by MDX
//   const source = await serialize(data.beitrag.description)

//   // Provide Props to the Page Component
//   return {
//     props: { beitrag: { ...data.beitrag, source } },
//     revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
    
//   }
// }



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
