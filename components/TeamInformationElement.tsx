import React from 'react'

import Image from 'next/image'

import Banner from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Banner.png'

export interface TeamInformationElementProps {}

const TeamInformationElement: React.FC<TeamInformationElementProps> = () => {
  return (
    <div className="rounded">
      <Image src={Banner} alt="ETSV Logo Cutted" className="rounded-md" />
    </div>
  )
}

export default TeamInformationElement
