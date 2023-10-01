import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Sponsor } from '../../types/clubTypes'

interface SponsorsProps {
  sponsors: Sponsor[]
}

const Sponsors = ({ sponsors }: SponsorsProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">
        <div className="shadow-card p-6">
          <h1 className="text-3xl pb-4">SPONSOREN</h1>
          <div className="flex flex-col md:flex-row gap-4">
            {sponsors.map((sponsor, index) => {
              return (
                <div
                  className="flex md:flex-1 h-52 p-2 md:h-auto justify-center items-center shadow-[5px_5px_20px_3px_rgba(0,0,0,0.25)] "
                  key={index}
                >
                  <Link href={sponsor.link}>
                    <Image
                      src={sponsor.image.url}
                      alt={sponsor.name}
                      width={250}
                      height={100}
                    />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
