import type { NextPage } from 'next'
import Head from 'next/head'
import HomeHome from './home/Home'


const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EO TextDraw Editor</title>
        <meta name="description" content="Your on-the-go, online TextDraw editor for GTA SA:MP and OpenMP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeHome />
      </main>
    </div>
  )
}

export default Index
