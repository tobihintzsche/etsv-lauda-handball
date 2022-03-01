import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Platzhalter from '../images/Platzhalter.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <Link href="/firstTeam">
          <h2 className="text-center text-xl font-bold">ETSV-Lauda-Handball</h2>
        </Link>
        <div className="flex justify-center flex-row">
          <div>
            <Image
              src={Platzhalter}
              height={300}
              width={460}
              alt="Headline"
              className="flex"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2 items-center align-center flex justify-center">
            <Image
              src={Platzhalter}
              height={150}
              width={230}
              alt="Headline"
              className="flex"
            />
          </div>
          <div className="basis-1/2 items-center align-center flex justify-center">
            <Image
              className="items-center flex"
              src={Platzhalter}
              height={150}
              width={230}
              alt="Headline"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
