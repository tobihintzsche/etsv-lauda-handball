import React from 'react'

import Image from 'next/image'

import CuttedLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo_Cutted.svg'

export interface TeamsOverviewProps {}

const TeamsOverview: React.FC<TeamsOverviewProps> = () => {
  return (
    <div className="border-2 w-full  bg-primary rounded-md border-black h-60">
      <div className="p-4">
        <h1 className="text-4xl">Team-Übersicht</h1>

        <div className="flex mt-4 gap-2">
          <div className="flex flex-1 flex-col text-3xl">
            <span>Herren</span>
            <span>B-Jugend (m)</span>
            <span>C-Jugend (m)</span>
            <span>D-Jugend</span>
          </div>

          <div className="flex flex-1 flex-col text-3xl">
            <span>Herren</span>
            <span>B-Jugend (m)</span>
            <span>C-Jugend (m)</span>
            <span>D-Jugend</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamsOverview
