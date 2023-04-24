import React from 'react'
import { Sponsor } from '../../types/clubTypes'
import { Footer } from './Footer'
import SponsorComponent from './Sponsors'

interface FooterWithSponsorsProps {
  sponsors: Sponsor[]
  googleMapsLink?: string
}

const FooterWithSponsors: React.FC<FooterWithSponsorsProps> = ({
  sponsors,
  googleMapsLink,
}) => {
  return (
    <div>
      <div className="py-10">
        <SponsorComponent sponsors={sponsors} />
      </div>
      <Footer googleMapsLink={googleMapsLink} />
    </div>
  )
}

export default FooterWithSponsors
