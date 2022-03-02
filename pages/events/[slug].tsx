import React from 'react'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from 'swr'
import { GraphQLClient, gql } from 'graphql-request'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

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
    <main>
      <div className="bg-sky-500/50 mt-3 mb-3 w-5/6 mx-auto rounded-md ">
          <div className='w-4/5 pt-3 pb-3 mx-auto'>
            <h1 className="text-xl font-bold ">{beitrag.title}</h1>
            <h2 className="text-sm font-light text-right">{beitrag.date}</h2>
            <p>{beitrag.description}</p>

            <div className="flex flex-col  md:flex-row justify-between ">
                <div className="w-full pt-4 md:w-1/2 md:pr-3">
                <img
                src={beitrag.image}
                alt={beitrag.title}
                className="rounded-md"
                
              />
                </div>
             <div className="w-full pt-4 md:w-1/2 md:pl-3">
             <img
                src={beitrag.image}
                alt={beitrag.title}
                className="rounded-md"
                
              />
             </div>
             
            </div>
          </div>
        </div>
    </main>
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
