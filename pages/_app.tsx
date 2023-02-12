/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import Layout from '../components/layout'
import { LayoutContext, LayoutContextProvider } from '../LayoutContext'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <LayoutContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutContextProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
