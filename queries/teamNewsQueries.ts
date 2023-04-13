import { gql } from '@apollo/client'

export const GET_TEAM_NEWS = gql`
  query TeamNewsRequest($id: ID!) {
    teamNews(where: { id: $id }) {
      id
      slug
      title
      description
      picture {
        url
      }
      createdAt
    }
  }
`

export const GET_TEAMS_NEWS = gql`
  query TeamNewsRequest {
    teamsNews {
      id
      slug
      title
      description
      picture {
        url
      }
      team {
        name
      }
    }
  }
`
