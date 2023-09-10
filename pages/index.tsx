import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EO TextDraw Editor</title>
        <meta name="description" content="Your on-the-go, online TextDraw editor for GTA SA:MP and OpenMP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>EO TextDraw Editor</h1>
      </main>
    </div>
  )
}

export default Home
