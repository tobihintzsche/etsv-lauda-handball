import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master',
  cache: new InMemoryCache(),
})

export default client
