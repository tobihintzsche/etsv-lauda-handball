import React from 'react'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from 'swr'
import { GraphQLClient, gql } from 'graphql-request'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import BeitragComponent from '../../components/beitrag'
import BeitragComponentSmall from '../../components/beitragSmall'

interface IBeitrag {
  id: string
  slug: string
  title: string
  date: string
  description: string
  image: string
  zuweisung: string
}

const client = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master'
)

export default function Beitrag({ beitrag }: { beitrag: IBeitrag }) {
  return (
    <>
      <BeitragComponent
        title={beitrag.title}
        date={beitrag.date}
        description={beitrag.description}
        image={beitrag.image}
      />
      <div className="flex flex-col md:flex-row w-5/6 justify-between mx-auto">
        <div className="md:mr-3">
          <BeitragComponentSmall
            title={beitrag.title}
            date={beitrag.date}
            description={beitrag.description}
            image={beitrag.image}
          />
        </div>
        <div className="md:ml-3">
          <BeitragComponentSmall
            title={beitrag.title}
            date={beitrag.date}
            description={beitrag.description}
            image={beitrag.image}
          />
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
    }
  `
  const data: { beitrag: IBeitrag | null } = await client.request(query, {
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

  // Provide Props to the Page Component
  return {
    props: { beitrag: { ...data.beitrag, source } },
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
