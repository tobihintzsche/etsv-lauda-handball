import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from 'swr'
import { GraphQLClient, gql } from 'graphql-request'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Beitrag from './events/[slug]'

export default function herren() {

  const query = gql`query beitrag {
    beitraege(where: {zuweisung:"Herren"}) {
      slug
      title
      description
    }
  }`

  const endpoint = 'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master'

  const client = new GraphQLClient(endpoint, { headers: {} })
  client.request(query).then((data) => console.log(data))

  const digits = [1,2,3]

  return (
    <div>
      <h1>Herren</h1>
  {}
    </div>
  )
}
