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
