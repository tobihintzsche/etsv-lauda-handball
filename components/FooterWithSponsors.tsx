import React from 'react'
import { Footer } from './Footer'
import { Sponsor } from './Layout'
import SponsorComponent from './Sponsors'

interface FooterWithSponsorsProps {
  sponsors: Sponsor[]
}

const FooterWithSponsors: React.FC<FooterWithSponsorsProps> = ({
  sponsors,
}) => {
  return (
    <div>
      <div className="pb-10">
        <SponsorComponent sponsors={sponsors} />
      </div>
      <Footer />
    </div>
  )
}

export default FooterWithSponsors
