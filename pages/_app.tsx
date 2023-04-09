/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css'

import Layout from '../components/layout'
import { LayoutContext, LayoutContextProvider } from '../LayoutContext'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppProps } from 'next/app'

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutContextProvider>
    </ApolloProvider>
  )
}
