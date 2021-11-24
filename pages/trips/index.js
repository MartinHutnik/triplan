import { Fragment } from 'react'
import Head from 'next/head'

import TripForm from '../../components/TripForm'
import Navigation from '../../components/Navigation'
import Sidebar from '../../components/Sidebar'

import styles from '../../styles/MainContent.module.scss'

export default function Trips(data) {
  return (
    <Fragment>
      <Head>
        <title>Triplan - Create new trip</title>
        <meta name='description' content='Create new trip' />
      </Head>
      <div id='app-wrapper'>
        <Navigation />
        <main className={styles.content}>
          <h2>New trip</h2>
          <TripForm
            countries={data.countries}
          />
        </main>
        <Sidebar />
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {

  const urls = [
    'https://task-devel.cleevio-vercel.vercel.app/api/country',
    //'https://task-devel.cleevio-vercel.vercel.app/api/trip'
  ]

  const header = new Headers({
    'Authorization': `Bearer ${process.env.TRIPS_APP_TOKEN}`,
  })

  const countries = await Promise.all(urls.map(async url => {
    const response = await fetch(url, {headers: header});
    return response.json();
  }));

  /*
  const request = await fetch('https://task-devel.cleevio-vercel.vercel.app/api/country', {
    headers: new Headers({
      'Authorization': `Bearer ${process.env.TRIPS_APP_TOKEN}`,
    }),
  })

  const countries = await request.json()
  */

  /*
  return {
    props: {
      locale: locale,
      footer: footer
    }
  }
  */

  return {
    props: { countries },
  }

}