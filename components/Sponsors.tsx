import React from 'react'
import { Sponsor } from './Layout'

interface SponsorComponentProps {
  sponsors: Sponsor[]
}

const SponsorComponent: React.FC<SponsorComponentProps> = ({ sponsors }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">
        <div className="shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
          <div className="p-6">
            <h1 className="text-4xl pb-4">SPONSOREN</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-6">
              {sponsors.map((sponsor) => {
                return (
                  <div className="flex-1 shadow-[5px_5px_20px_3px_rgba(0,0,0,0.25)] ">
                    <img
                      src={sponsor.image.url}
                      alt={sponsor.name}
                      className="object-cover h-full w-full"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorComponent
