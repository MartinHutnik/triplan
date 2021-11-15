import { Fragment } from 'react'
import Head from 'next/head'

import Navigation from '../components/Navigation'
import MainContent from '../components/MainContent'
import Sidebar from '../components/Sidebar'

export default function Home(data) {
  return (
    <Fragment>
      <Head>
        <title>Triplan - Your trips</title>
        <meta name='description' content='Create your trip' />
      </Head>
      <div id='app-wrapper'>
        <Navigation />
        <MainContent
          countries={data.countries}
        />
        <Sidebar />
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {

  const request = await fetch('https://task-devel.cleevio-vercel.vercel.app/api/country', {
    headers: new Headers({
      'Authorization': `Bearer ${process.env.TRIPS_APP_TOKEN}`,
    }),
  })

  const countries = await request.json()

  return {
    props: { countries },
  }

}