import '../styles/globals.css'
import React from 'react'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppProps } from 'next/app'
import { LayoutContextProvider } from '../LayoutContext'
import { Layout } from '../components/Layout'

import { Hammersmith_One } from '@next/font/google'

const hammersmithOne = Hammersmith_One({
  subsets: ['latin'],
  weight: '400',
})

export default function App({
  Component,
  pageProps,
}: AppProps<{ pageContext?: any }>) {
  const client = new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <LayoutContextProvider>
        <main className={hammersmithOne.className}>
          {/* <div className="h-screen flex items-center justify-center">
            <h1>Work in progress ...</h1>
          </div> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </LayoutContextProvider>
    </ApolloProvider>
  )
}
