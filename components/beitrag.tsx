import React from 'react'

interface IProps {
  title: string
  date: string
  description: string
  image: string
}

const BeitragComponent = ({ title, date, description, image }: IProps) => {
  return (
    <main>
      <div className="bg-neutral-400/50 mt-3 mb-3 w-5/6 mx-auto rounded-md border-2 border-black">
        <div className="w-4/5 pt-3 pb-3 mx-auto">
          <h1 className="text-xl font-bold ">{title}</h1>
          <h2 className="text-sm font-light text-right">{date}</h2>
          <p>{description}</p>

          <div className="flex flex-col  md:flex-row justify-between ">
            <div className="w-full pt-4 md:w-1/2 md:pr-3">
              <img src={image} alt={title} className="rounded-md" />
            </div>
            <div className="w-full pt-4 md:w-1/2 md:pl-3">
              <img src={image} alt={title} className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BeitragComponent
