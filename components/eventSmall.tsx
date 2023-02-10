import { time } from 'console'
import React from 'react'

interface IProps {
  eventTitle: string
  dateAndTime: string
  location: string
}

const EventSmall = ({ eventTitle, dateAndTime, location }: IProps) => {
  var dateNow: Date = new Date()
  var dateFuture: Date = new Date(dateAndTime)

  return (
    <main>
      <div className="rounded-md border-2 border-yellow  md:w-full mt-3 pt-3 pb-3 pr-3 pl-3 mx-auto flex md:flex-col justify-between">
        <div>
          <h1 className="text-l italic font-semibold">
            {eventTitle.toUpperCase()}
          </h1>
          <div className="flex pt-1 pb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/115/115313.png"
              width={15}
            />
            <p className="text-xs text-slate-700">{location}</p>
          </div>
        </div>
        <div className="border-l-4 pl-3 border-l-amber-300 md:border-0 md:pl-0">
          <p className="text-xs pb-1">Zeit bis zum nächsten Spiel</p>
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="">
              <p className="text-2xl text-center">{10}</p>
              <p className="text-xs text-slate-400 text-center">Tage </p>
            </div>
            <div className="">
              <p className="text-2xl text-center">{20}</p>
              <p className="text-xs text-slate-400 text-center">Stunden </p>
            </div>
            <div className="">
              <p className="text-2xl text-center">{10}</p>
              <p className="text-xs text-slate-400 text-center">Minuten </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default EventSmall
