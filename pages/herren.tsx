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
  return (
    <div>
      <h1>Herren</h1>
      {}
    </div>
  )
}
