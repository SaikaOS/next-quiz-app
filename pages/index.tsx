import type { NextPage } from 'next'
import Head from 'next/head'
import MainPage from '../components/main-page'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <MainPage></MainPage>
      </main>
    </div>
  )
}

export default Home
