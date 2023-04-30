import { ContactPerson } from './teamTypes'

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
  manager: ContactPerson
  imprint: string
  privacy_content: string
  google_maps_link: string
  cmsLink: string
}

export interface Sponsor {
  image: {
    url: string
  }
  link: string
  name: string
  sponsoring_rank: SponsoringRank
}

export interface SponsoringRank {
  sponsoringRank: 'Hauptsponsor' | 'Premiumsponsor' | 'CoSponsor'
}
