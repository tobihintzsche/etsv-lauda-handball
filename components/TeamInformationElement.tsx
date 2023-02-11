import React from 'react'

import Image from 'next/image'

import CuttedLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo_Cutted.svg'

export interface TeamInformationElementProps {}

const TeamInformationElement: React.FC<TeamInformationElementProps> = () => {
  return (
    <div className="relative  border-2 w-full text-right bg-primary rounded-md border-black h-60">
      <div className="pr-4 pt-4">
        <h1 className="text-4xl">ETSV-Lauda Handball, das sind WIR</h1>
        <div className="flex text-3xl pt-4 flex-col">
          <span>Spiel</span>
          <span>Spaß</span>
          <span>Gemeinsam Bärenstark</span>
        </div>
      </div>
      <div className="absolute h-[250px] w-[250px] left-0 bottom-0">
        <div>
          <Image
            src={CuttedLogo}
            alt="ETSV Logo Cutted"
            height={250}
            width={250}
          />
        </div>
      </div>
    </div>
  )
}

export default TeamInformationElement
