import React from 'react'
import { Club } from '../pages'

interface ClubInformationProps {
  club: Club
}

const ClubInformation: React.FC<ClubInformationProps> = ({ club }) => {
  return (
    <div className="bg-white gap-10  flex flex-col lg:flex-row  shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
      <div className="flex-2 px-6 py-6 pl-6">
        <div className="flex flex-col w-full lg:w-max">
          <h1 className="text-4xl pb-2 lg:pb-0 lg:text-5xl">
            {club.name.toUpperCase()}
          </h1>
          <div className="bg-black lg:bg-inherit -mx-6 lg:mx-0 py-2 lg:py-0">
            <div className="px-6 lg:px-0">
              <h2 className="text-2xl lg:text-4xl text-yellow-400 bg-origin-padding lg:bg-black lg:shadow-[0px_0px_0px_6px_rgba(0,0,0,1)]">
                {club.subline}
              </h2>
            </div>
          </div>
        </div>
        <div
          className="pt-8 text-xl whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: club.home_description,
          }}
        />
      </div>
      <div className="lg:flex-1">
        <img
          className="h-full object-cover"
          src={club.picture.url}
          alt={club.name}
        />
      </div>
    </div>
  )
}

export default ClubInformation
