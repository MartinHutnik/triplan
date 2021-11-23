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
          <h2>Create new trip index file</h2>
          <TripForm />
        </main>
        <Sidebar />
      </div>
    </Fragment>
  )
}