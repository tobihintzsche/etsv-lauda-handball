import React from 'react'

import Image from 'next/image'

import { Team } from '../../types/teamTypes'
import Link from 'next/link'

import InstagramLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/images//Instagram_Logo.svg'
import FacebookLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/images//Facebook_Logo.svg'

export interface TeamInformationProps {
  team: Team
}

const TeamInformation: React.FC<TeamInformationProps> = ({ team }) => {
  return (
    <div className="p-6 flex flex-wrap gap-4 shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
      <div className="flex-3">
        <h2 className="text-2xl">Trainer:</h2>
        <div className="flex flex-col gap-2 pr-10">
          {team.coaches.map((coach, index) => {
            return (
              <div
                key={index}
                className="text-lg md:text-xl whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: coach,
                }}
              />
            )
          })}
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl">Trainingszeiten:</h2>
        <div className="flex flex-col gap-2 pr-10">
          {team.practice_times.map((practiceTime, index) => {
            return (
              <div
                className="text-lg md:text-xl whitespace-nowrap"
                dangerouslySetInnerHTML={{
                  __html: practiceTime,
                }}
              />
            )
          })}
        </div>
      </div>
      {(team.social_media?.facebook || team.social_media?.instagram) && (
        <div className="flex-1">
          <h2 className="text-2xl pb-2 whitespace-nowrap">Social Media:</h2>
          <div className="flex gap-4">
            {team.social_media.facebook && (
              <Link href={team.social_media.facebook}>
                <a>
                  <Image src={FacebookLogo} width={50} height={50} />
                </a>
              </Link>
            )}
            {team.social_media.instagram && (
              <Link href={team.social_media.instagram}>
                <a>
                  <Image src={InstagramLogo} width={50} height={50} />
                </a>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamInformation
