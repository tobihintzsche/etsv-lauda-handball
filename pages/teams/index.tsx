import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navigationConfig } from '../../components/Navigation/navigationConfig'
import React from 'react'

import {
  genderMapping,
  SubNavigation,
} from '../../components/Navigation/Subnavigation.desktop'
import { GET_NAVIGATION } from '../../queries/clubQueries'
import { enrichNavigationConfig } from '../../utils/enrichNavigationConfig'

export default function Teams() {
  const { error, data: homeTeamResponse } = useQuery(GET_NAVIGATION)

  const [navigationItems, setNavigationItems] = useState([])

  useEffect(() => {
    if (homeTeamResponse) {
      setNavigationItems(homeTeamResponse.teams)
    }
  }, [homeTeamResponse])

  const enrichedNavigationConfig = enrichNavigationConfig(
    navigationConfig,
    navigationItems
  )

  const { navigation } = enrichedNavigationConfig

  return (
    <div className="flex flex-col gap-2">
      {navigation.map((navigationItem, index) => {
        const { subNavigation, link } = navigationItem
        return (
          <div className="flex flex-col" key={index}>
            {subNavigation && link.href === link.href && (
              <div className="flex flex-col md:flex-row md:w-full md:justify-between gap-4 md:gap-0">
                {Object.entries(subNavigation).map(([gender, teams]) => {
                  if (teams.length > 0)
                    return (
                      <div key={gender} className="">
                        <div className="text-2xl mb-4 md:text-4xl xl:text-5xl w-min text-primary bg-origin-padding bg-black shadow-[0px_0px_0px_6px_rgba(0,0,0,1)]">
                          {genderMapping[gender].toUpperCase()}
                        </div>

                        <div className="flex flex-col">
                          {teams.map((team, index) => (
                            <Link
                              key={index}
                              href={`${team.href}`}
                              legacyBehavior
                            >
                              <button className=" hover:text-yellow-500 text-2xl xl:text-3xl w-min whitespace-nowrap text-left">
                                {team.title}
                              </button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
