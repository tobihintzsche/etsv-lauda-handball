import React from 'react'
import { Sponsor } from '../../types/clubTypes'
import { Footer } from './Footer'
import SponsorComponent from './Sponsors'

interface FooterWithSponsorsProps {
  sponsors: Sponsor[]
}

const FooterWithSponsors: React.FC<FooterWithSponsorsProps> = ({
  sponsors,
}) => {
  return (
    <div>
      <div className="py-10">
        <SponsorComponent sponsors={sponsors} />
      </div>
      <Footer />
    </div>
  )
}

export default FooterWithSponsors
