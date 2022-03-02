import React from 'react'
import Image from 'next/image'
import { gql } from 'graphql-request'
import { GraphQLClient } from 'graphql-request'

// const graphcms = new GraphQLClient(
//     'https://api-eu-central-1.graphcms.com/v2/cl0874wb42pah01xr1jnmabfu/master',
//     {
//       headers: {
//         Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDYxNDY0OTEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsMDg3NHdiNDJwYWgwMXhyMWpubWFiZnUvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZGU1M2Y5M2ItOTU2Mi00NmVlLTg0YjQtYjJhYmE2ZDNhMjY4IiwianRpIjoiY2wwODk0OW9qMzB4MTAxejNiNGZwY212dCJ9.qWXvhvIW6xEd6sIBtHPCD_6b-klCAWVJSIAz2sQT01LU-SOAjTqK8QKNkOAsvr7ME1Y7Z-HoQp0hw3tBP8tjiV1vM6iagbLvzgcGa_kDMdGBinvQTw2AnjqxT2x9cvDo45ldjEgc9-Nu9N2lP2xcT0oX_5PvUCrEAVp281MD-96g_wTzXsJ-MLAhCdus7OWimz7PMEhDYRj4AjFt4fZbxLICTFHc9KqxG-U3i-tEpZu1tQYDZEbUY3ltF9-ZsiLmaDB2UZtQRsfhlY3JXjNEgN4Kt3RTN6uGiJAnwMd9sgH5T7hAgQxBnvH7Zo2KtOTZoz5Vb5lefZDGM4CkGCom7bcOrcDh5tDwGX5ff_Iijp3kpZh2LqhbqD0k93qGCmDAkbpHrkkjpdbd8RLaOEyGdc2Irl5F1pNghtjFgmifDeczotLvlzsFK0kjjZtBbLT1jt3M__G5I3k48s5SyQTXoGmnIbv5vRN3BSd4z2_KIKBqmtEt-N0SccpUBe-pJABaC-z1JtrrQ6qZBhl8xO0re1G075YrFkrmBhpafRC3R6g5-bt2SAxlz6SsCt7eOXJod_R7U9uPWagf1fn4MSK0scHGv_TfeIL-AMIXpWA3-0cjnRFBbAwRD_SUtB2PdVm5Nd59TH_0OniFeMXq8ENaE17Le_2tkFWbtJNI1So_FuU'
//       }
//     }
//   );

// const QUERY = gql`
//   {
//     posts {
//       id
//       title
//     }
//   }
// `

// export async function getStaticProps() {
//   const { posts } = await graphcms.request(QUERY)

//   return {
//     props: {
//       posts
//     }
//   }
// }

export default function herren() {
  return (
    <div className="">
      <h2 className="text-center text-xl  font-bold">Herren</h2>
      <div></div>
    </div>
  )
}
