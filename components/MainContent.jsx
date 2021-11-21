import Select from 'react-select'
import Trips from './Trips'
import styles from '../styles/MainContent.module.scss'

export default function MainContent(data) {

  const countries = data.countries

  return (
    <main className={styles.content}>
      <h2>{data.title}</h2>
      <Select
        id='countries-select'
        instanceId='countries-select'
        options={countries}
      />
      <Trips
        trips={data.countries}
      />
    </main>
  )

}