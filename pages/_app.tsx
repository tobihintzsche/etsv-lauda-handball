/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import Layout from '../components/layout'
import { LayoutContext, LayoutContextProvider } from '../LayoutContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutContextProvider>
    </>
  )
}

export default MyApp
