import { gql } from '@apollo/client'

export const GET_CLUBS = gql`
  query ClubsRequest {
    clubs {
      description
      id
      name
      logo {
        url
      }
      picture {
        url
      }
      home_description
      subline
    }
  }
`

export const GET_SPONSORS = gql`
  query SponsorRequest {
    sponsors {
      name
      link
      image {
        url
      }
      sponsoring_rank
    }
  }
`

export const GET_NAVIGATION = gql`
  query NavigationRequest {
    teams {
      name
      gender
    }
  }
`
