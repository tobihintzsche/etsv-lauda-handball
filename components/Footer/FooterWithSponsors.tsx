import React from 'react'
import { Sponsor } from '../../types/clubTypes'
import { Footer } from './Footer'
import SponsorComponent from './Sponsors'

interface FooterWithSponsorsProps {
  sponsors: Sponsor[]
  googleMapsLink?: string
  cmsLink: string
}

const FooterWithSponsors: React.FC<FooterWithSponsorsProps> = ({
  sponsors,
  googleMapsLink,
  cmsLink,
}) => {
  return (
    <div>
      <div className="py-10">
        <SponsorComponent sponsors={sponsors} />
      </div>
      <Footer googleMapsLink={googleMapsLink} cmsLink={cmsLink} />
    </div>
  )
}

export default FooterWithSponsors
