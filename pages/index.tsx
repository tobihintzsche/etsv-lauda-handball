import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <Link href="/firstTeam">
          <h2 className="text-center text-xl font-bold">ETSV-Lauda-Handball</h2>
        </Link>
      </main>
    </div>
  )
}

export default Home
