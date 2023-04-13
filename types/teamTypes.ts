import { TeamNews } from './teamNewsTypes'

export interface HandballNetConfiguration {
  gameplan_script: string
  table_script: string
}

export interface SocialMedia {
  instagram: string
  facebook: string
}

export interface HygraphPicture {
  url: string
}

export interface Team {
  id: string
  name: string
  gender: 'Maennlich' | 'Weiblich' | 'Gemischt'
  practice_times: string[]
  coaches: string[]
  handball_net_configuration: HandballNetConfiguration
  slug: string
  social_media: SocialMedia
  team_picture: HygraphPicture
  team_picture_description: string
  teamsNews: TeamNews[]
}
