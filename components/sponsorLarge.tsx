import { time } from 'console'
import React from 'react'

interface IProps {
  sponsor: string
  image: string
  description: string
}

const SponsorLarge = ({ sponsor, image, description }: IProps) => {
  return (
    <main>
      <div className="w-5/6 mx-auto">
        <h1 className="text-l font-semibold">{sponsor}</h1>
        <div className="flex pt-1 pb-3">
          <p className="text-xs text-slate-700">{description}</p>
          <img src={image} />
        </div>
      </div>
    </main>
  )
}

export default SponsorLarge
