import client from '../../apollo-client'
import { Gameplan } from '../../components/HandballNet/Gameplan'
import { Table } from '../../components/HandballNet/Table'
import { TeamNewsComponent } from '../../components/Team/TeamNews'

import InstagramLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/images//Instagram_Logo.svg'
import FacebookLogo from '/Users/tobiashintzsche/dev/etsv-lauda-handball/images//Facebook_Logo.svg'

import Link from 'next/link'
import Image from 'next/image'
import { SINGLE_TEAM_QUERY } from '../../queries/teamQueries'
import { Team } from '../../types/teamTypes'
import { GET_TEAM_NEWS } from '../../queries/teamNewsQueries'
import { TeamNews } from '../../types/teamNewsTypes'

export interface TeamOverviewPageProps {
  team: Team
  latestTeamNews: TeamNews
}

const TeamOverviewPage: React.FC<TeamOverviewPageProps> = ({
  team,
  latestTeamNews,
}) => {
  return (
    <div className="flex flex-col lg:flex-row py-8 gap-10">
      <div className="flex-2 flex flex-col gap-8">
        {/* Herren plus Foto */}
        <div>
          <div className="text-6xl">{team.name.toUpperCase()}</div>
          <div className="shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
            <img
              className="object-cover w-full h-full"
              src={team.team_picture.url}
              alt={team.name}
            />
            {team.team_picture_description && (
              <p className="py-6 px-6 text-xl">
                {team.team_picture_description}
              </p>
            )}
          </div>
        </div>
        {/* Trainer Info */}
        <div className="p-12 flex flex-row flex-wrap shadow-[10px_10px_30px_9px_rgba(0,0,0,0.25)]">
          <div className="w-min">
            <h2 className="text-3xl">Trainer:</h2>
            <div className="flex flex-col gap-2">
              {team.coaches.map((coach, index) => {
                return <div key={index}>{coach}</div>
              })}
            </div>
          </div>
          <div className="w-min">
            <div>
              <h2 className="text-3xl">Trainingszeiten:</h2>
              <div className="flex flex-col gap-2">
                {team.practice_times.map((practiceTime, index) => {
                  return <div key={index}>{practiceTime}</div>
                })}
              </div>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-3xl pb-2">Social Media:</h2>
              <div className="flex gap-4">
                {team.social_media.facebook && (
                  <Link href={team.social_media.facebook}>
                    <a>
                      <Image src={FacebookLogo} width={50} height={50} />
                    </a>
                  </Link>
                )}
                {team.social_media.instagram && (
                  <Link href={team.social_media.instagram}>
                    <a>
                      <Image src={InstagramLogo} width={50} height={50} />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {latestTeamNews && (
          <div>
            <h1 className="text-4xl pb-4">NEWS</h1>
            <TeamNewsComponent showLogo={true} teamNews={latestTeamNews} />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-10 flex-1">
        <Table team={team} />
        <Gameplan team={team} />
      </div>
    </div>
  )
}

type ServerSideProps = {
  props: {
    team: Team
    latestTeamNews: TeamNews
  }
}

export async function getServerSideProps({
  params,
}: any): Promise<ServerSideProps> {
  const slug = params.slug as string

  const { data } = await client.query({
    query: SINGLE_TEAM_QUERY,
    variables: { slug },
  })

  const latestTeamNewsId: string = data.team.teamsNews[0].id

  const { error, data: teamNewsResponse } = await client.query({
    query: GET_TEAM_NEWS,
    variables: { id: latestTeamNewsId },
  })

  return {
    props: {
      team: data.team,
      latestTeamNews: teamNewsResponse.teamNews,
    },
  }
}

export default TeamOverviewPage
