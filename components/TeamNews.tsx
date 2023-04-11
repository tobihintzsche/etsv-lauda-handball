import React from 'react'
import { TeamNews } from '../pages'
import { Team } from '../pages/teams/[slug]'
import Image from 'next/image'
import CuttedLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/Handball_Logo_Cutted_Square_Project.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface TeamNewsProps {
  teamNews: TeamNews
  showLogo: boolean
}

export function TeamNewsComponent({
  teamNews,
  showLogo = true,
}: TeamNewsProps) {
  const router = useRouter()

  function handleClick(id: string) {
    router.push('/news/[id]', `/news/${id}`)
  }

  return (
    <div className="relative">
      <div className="bg-white px-6 pt-6 shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
        <h1
          className="text-3xl lg:text-5xl font-normal"
          style={{
            WebkitTextStrokeColor: 'black',
            WebkitTextStrokeWidth: '1px',
          }}
        >
          {teamNews.title.toUpperCase()}
        </h1>
        <p className="text-lg lg:text-xl leading-8 py-8">
          {teamNews.description.substring(0, 250) + ' ...'}
          <span className="text-amber-400">
            <Link href={`/news/${teamNews.slug}-${teamNews.id}`}>
              <span>[Zum Bericht]</span>
            </Link>
          </span>
        </p>
        <img className="object-cover w-full" src={teamNews.picture.url} />
      </div>
      {showLogo && (
        <div className="absolute lg:h-[250px] lg:w-[250px] md:h-[200px] md:w-[200px] h-[150px] w-[150px] left-0 bottom-0">
          <Image src={CuttedLogo} alt="ETSV Logo" height={250} width={250} />
        </div>
      )}
    </div>
  )
}
