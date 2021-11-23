import Trips from './Trips'
import styles from '../styles/MainContent.module.scss'

export default function MainContent(data) {

  const countries = data.countries

  return (
    <main className={styles.content}>
      <h2>{data.title}</h2>
      <Trips
        trips={data.countries}
      />
    </main>
  )

}