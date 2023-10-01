import React from 'react'

import Image from 'next/image'

import { Team } from '../../types/teamTypes'
import Link from 'next/link'

export interface TeamInformationProps {
  team: Team
}

const TeamInformation: React.FC<TeamInformationProps> = ({ team }) => {
  return (
    <div className="p-6 flex flex-wrap gap-4 shadow-card">
      <div className="flex-1">
        <Coaches team={team} />
      </div>
      <div className="flex-1">
        <PracticeTimes team={team} />
      </div>
    </div>
  )
}

export default TeamInformation

interface CoachesProps {
  team: Team
}

const Coaches = ({ team }: CoachesProps) => {
  return (
    <>
      <h2 className="text-2xl w-min whitespace-nowrap bg-black text-primary shadow-[0px_0px_0px_3px_rgba(0,0,0,1)]">
        TRAINER:
      </h2>
      <div className="flex pt-2 flex-col gap-4">
        {team.coaches.map((coach, index) => {
          const { name, telephone, eMail } = coach
          return (
            <div className="text-lg lg:text-xl" key={index}>
              <div>{name.toUpperCase()}</div>
              <div>{telephone}</div>
              <div>{eMail}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

interface PracticeTimesProps {
  team: Team
}

const PracticeTimes = ({ team }: PracticeTimesProps) => {
  return (
    <>
      <h2 className="text-2xl w-min whitespace-nowrap bg-black text-primary shadow-[0px_0px_0px_3px_rgba(0,0,0,1)]">
        TRAININGSZEITEN:
      </h2>{' '}
      <div className="flex flex-col gap-2 pr-10">
        {team.practice_times.map((practiceTime, index) => {
          const { date, practiceLocation } = practiceTime
          const { google_maps_link, name } = practiceLocation
          return (
            <div className="text-lg lg:text-xl pt-2" key={index}>
              <div className="flex flex-wrap whitespace-nowrap">{date}</div>
              <Link className="hover:text-blue-900" href={google_maps_link}>
                {name}
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
