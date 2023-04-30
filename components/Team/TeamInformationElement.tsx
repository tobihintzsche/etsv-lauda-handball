import React from 'react'

import Image from 'next/image'

import { Team } from '../../types/teamTypes'
import Link from 'next/link'

export interface TeamInformationProps {
  team: Team
}

const TeamInformation: React.FC<TeamInformationProps> = ({ team }) => {
  return (
    <div className="p-6 flex flex-wrap gap-4 shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
      <div className="flex-1">
        <h2 className="text-2xl w-min whitespace-nowrap bg-black text-yellow-400 shadow-[0px_0px_0px_3px_rgba(0,0,0,1)]">
          TRAINER:
        </h2>
        <div className="flex pt-2 flex-col gap-4">
          {team.coaches.map((coach, index) => {
            return (
              <div className="text-lg lg:text-xl">
                <div>{coach.name.toUpperCase()}</div>
                <div>{coach.telephone}</div>
                <div>{coach.eMail}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl w-min whitespace-nowrap bg-black text-yellow-400 shadow-[0px_0px_0px_3px_rgba(0,0,0,1)]">
          TRAININGSZEITEN:
        </h2>
        <div className="flex flex-col gap-2 pr-10">
          {team.practice_times.map((practiceTime, index) => {
            return (
              <div className="text-lg lg:text-xl pt-2">
                <div className="flex flex-wrap">
                  <div className="whitespace-nowrap">{practiceTime.date}</div>
                </div>
                <div className="hover:text-blue-900">
                  <Link href={practiceTime.practiceLocation.google_maps_link}>
                    {practiceTime.practiceLocation.name}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TeamInformation
