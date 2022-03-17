import Link from 'next/link'
import React from 'react'

interface IProps {
  title: string
  date: string
  description: string
  image: string
  slug: string
}

const BeitragComponent = ({
  title,
  date,
  description,
  image,
  slug,
}: IProps) => {
  return (
    <main>
      <div className="bg-white mt-3 mb-3 mx-auto rounded-md border-2 border-amber-300">
        <h1 className="text-xl pl-3 pt-1 pb-1 bg-amber-300 italic font-bold ">
          {title.toUpperCase()}
        </h1>
        <h2 className="text-sm font-light text-right">{date}</h2>

        <div className="pl-3 pr-3 pt-3 pb-3 mx-auto">
          <p>
            {description.substring(0, 200)}{' '}
            <text className="text-amber-400">
              <Link href={'/events/' + slug}> [Mehr...] </Link>
            </text>
          </p>

          <div className="flex flex-col  md:flex-row justify-between ">
            <div className="pl-3 w-full pt-3 pb-3 pr-3">
              <img src={image} alt={title} className="rounded-md w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BeitragComponent
