import React from 'react'
import { Sponsor } from '../../types/clubTypes'

interface SponsorComponentProps {
  sponsors: Sponsor[]
}

const SponsorComponent: React.FC<SponsorComponentProps> = ({ sponsors }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">
        <div className="shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
          <div className="p-6">
            <h1 className="text-3xl pb-4">SPONSOREN</h1>
            <div className="flex flex-col md:flex-row gap-6">
              {sponsors.map((sponsor, index) => {
                return (
                  <div
                    className="flex-1 shadow-[5px_5px_20px_3px_rgba(0,0,0,0.25)] "
                    key={index}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
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
