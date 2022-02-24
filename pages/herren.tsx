import React from 'react'
import Image from 'next/image'
import Platzhalter from '../images/Platzhalter.png'

export default function herren() {
  return (
    <div className="">
      <h2 className="text-center text-xl  font-bold">Herren</h2>
      <div>
        <Image src={Platzhalter} height={150} width={230} alt="Headline" />
      </div>
    </div>
  )
}
