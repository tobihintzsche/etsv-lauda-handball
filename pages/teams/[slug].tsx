// Import necessary modules from the @apollo/client package
import { InMemoryCache, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { ApolloClient } from '@apollo/client'

// Initialize a new instance of the ApolloClient with the specified GraphQL API endpoint and in-memory cache
const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master',
  cache: new InMemoryCache(),
})

// Define a GraphQL query to retrieve beitraege (posts) with a specified zuweisung (assignment) value
const GET_beitraege = gql`
  query beitraege($zuweisung: String!) {
    beitraege(where: { zuweisung: $zuweisung }, last: 3) {
      id
      title
      slug
      description
      image
    }
  }
`

// Define an interface for the Props passed to the DynamicPage component
interface Props {
  zuweisung: any
}

// Create a functional component for the DynamicPage
const DynamicPage: React.FC<Props> = ({ zuweisung }) => {
  // Use the useQuery hook to execute the GET_beitraege query using the specified ApolloClient and zuweisung value
  const { data, error } = useQuery(GET_beitraege, {
    client,
    variables: { zuweisung: zuweisung },
  })

  // Log the query response data and error to the console
  console.log(data)
  console.log(error)

  // Return a div containing the mapped data from the query response
  return (
    <div>
      {data &&
        data.beitraege.map((beitrag, index) => (
          <div key={index}>
            <p>{beitrag.title}</p>
          </div>
        ))}
    </div>
  )
}

// Define a getServerSideProps function that will retrieve the zuweisung value from the params object passed to the component
export async function getServerSideProps({ params }) {
  const zuweisung = params.slug as string
  const { data } = await client.query({
    query: GET_beitraege,
    variables: { zuweisung: zuweisung },
  })

  // Return the zuweisung value as a prop for the DynamicPage component
  return {
    props: {
      zuweisung: params.slug as string,
    },
  }
}

// Export the DynamicPage component as the default export
export default DynamicPage
