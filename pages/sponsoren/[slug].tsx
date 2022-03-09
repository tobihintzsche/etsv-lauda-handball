import React from 'react'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from 'swr'
import { GraphQLClient, gql } from 'graphql-request'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import SponsorLarge from '../../components/sponsorLarge'

interface ISponsor {
  id: string
  slug: string
  name: string
  description: string
  image: string
}

interface ISponsoren {
  sponsoren: ISponsor[]
}

const client = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master'
)

export default function sponsor({ sponsor }: { sponsor: ISponsor }) {
  return (
    <>
      <SponsorLarge
        sponsor={sponsor.name}
        description={sponsor.description}
        image={sponsor.image}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string

  console.log(slug)

  const query = gql`
    query sponsor($slug: String!) {
      sponsor(where: { slug: $slug }) {
        id
        slug
        name
        description
        image
      }
    }
  `
  const data: { sponsor: ISponsor | null } = await client.request(query, {
    slug,
  })

  // Handle sponsor slugs which don't exist in our CMS
  if (!data.sponsor) {
    return {
      notFound: true,
    }
  }

  // Convert the Markdown into a compiled source used by MDX
  const source = await serialize(data.sponsor.description)

  // Provide Props to the Page Component
  return {
    props: { sponsor: { ...data.sponsor, source } },
    revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query sponsor {
      sponsoren {
        slug
      }
    }
  `

  const data = await client.request(query)

  console.log(data)

  return {
    paths: data.sponsoren.map((sponsor: ISponsor) => ({
      params: { slug: sponsor.slug },
    })),
    fallback: 'blocking',
  }
}
