import { gql } from '@apollo/client'

export const GET_HOME_TEAM = gql`
  query HomeRequest {
    homes {
      team {
        id
        slug
      }
    }
  }
`

export const SINGLE_TEAM_QUERY = gql`
  query SingleTeamRequest($slug: String!) {
    team(where: { slug: $slug }) {
      name
      gender
      practice_times {
        date
        practiceLocation {
          name
          google_maps_link
        }
      }
      coaches {
        name
        telephone
        eMail
      }
      handball_net_configuration {
        gameplan_script
        table_script
      }
      slug
      social_media {
        instagram
        facebook
      }
      team_picture {
        url
      }
      team_picture_description
      teamsNews {
        id
      }
    }
  }
`
