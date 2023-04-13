export interface TeamNews {
  id: string
  slug: string | null
  title: string
  description: string
  picture: {
    url: string
  }
  createdAt: Date
}

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

export interface Club {
  description: string
  id: string
  name: string
  logo: {
    url: string
  }
  picture: {
    url: string
  }
  home_description: string
  subline: string
  manager: string
}

export interface NavigationItem {
  link: NavigationSingleLink
  subNavigation?: {
    men?: NavigationSingleLink[]
    woman?: NavigationSingleLink[]
    mixed?: NavigationSingleLink[]
  }
}

export interface NavigationSingleLink {
  title?: string
  href?: string
}

export interface NavigationConfig {
  navigation: NavigationItem[]
}
