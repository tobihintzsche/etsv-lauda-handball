import { time } from 'console'
import Link from 'next/link'
import React from 'react'

interface IProps {
  image: string
  slug: string
}

const SponsorSmall = ({ image, slug }: IProps) => {
  return (
    <main>
      <div className="rounded-md border-2 border-yellow w-48 mt-3 pt-3 pb-3 pr-3 pl-3">
        <div className="flex pt-1 pb-1">
          <Link href={'/sponsoren/' + slug}>
            <img src={image} className="hover" />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default SponsorSmall
