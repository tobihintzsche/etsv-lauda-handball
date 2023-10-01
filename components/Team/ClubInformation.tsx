import classNames from 'classnames'
import React from 'react'
import { Club } from '../../types/clubTypes'

interface ClubInformationProps {
  club: Club
  isSmall?: boolean
}

const ClubInformation: React.FC<ClubInformationProps> = ({ club, isSmall }) => {
  return (
    <div className="bg-white flex flex-col lg:flex-row  shadow-card">
      <div className="flex-2 px-6 py-6 pl-6">
        <div className="flex flex-col w-full lg:w-max">
          <h1
            className={classNames(
              'text-3xl pb-2',
              isSmall ? '' : 'lg:pb-0 lg:text-5xl'
            )}
          >
            {club.name.toUpperCase()}
          </h1>
          <div className="bg-black lg:bg-inherit -mx-6 lg:mx-0 py-2 lg:py-0">
            <div className="px-6 lg:px-0">
              <h2
                className={classNames(
                  'text-2xl  text-primary bg-origin-padding lg:bg-black lg:shadow-[0px_0px_0px_6px_rgba(0,0,0,1)]',
                  isSmall ? '' : 'lg:text-4xl'
                )}
              >
                {club.subline}
              </h2>
            </div>
          </div>
        </div>
        <div
          className="pt-4 text-lg lg:text-xl whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: club.home_description,
          }}
        />
      </div>
      {!isSmall && (
        <div className="lg:flex-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lg:h-full object-cover"
            src={club.picture.url}
            alt={club.name}
          />
        </div>
      )}
    </div>
  )
}

export default ClubInformation
