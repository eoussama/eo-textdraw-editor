import Head from 'next/head';
import type { NextPage } from 'next';
import EditorPage from './editor/Editor';


const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EO TextDraw Editor</title>
        <meta name="description" content="Your on-the-go, online TextDraw editor for GTA SA:MP and OpenMP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <EditorPage />
      </main>
    </div>
  )
}

export default Index
