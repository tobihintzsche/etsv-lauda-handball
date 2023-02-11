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
      <div className="bg-white mx-auto rounded-md border-2 border-amber-300">
        <h1 className="text-2xl pl-3 pt-1 pb-1 bg-amber-300 italic font-bold ">
          {title.toUpperCase()}
        </h1>
        <h2 className="text-sm font-light text-right">{date}</h2>

        <div className=" text-2xl mx-auto">
          <div className="p-4">
            <span className="font-light">{description.substring(0, 200)}</span>
            <span className="text-amber-400">
              <Link href={'/events/' + slug}> [Mehr...] </Link>
            </span>
          </div>

          <div className="flex flex-col  md:flex-row justify-between ">
            <div>
              <img src={image} alt={title} className="rounded-md w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BeitragComponent
