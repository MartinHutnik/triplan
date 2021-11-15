import Select from 'react-select'
import styles from '../styles/MainContent.module.scss'

export default function MainContent(data) {

  const countries = data.countries

  return (
    <main className={styles.content}>
      <h1>Main content</h1>
      <Select
        id='countries-select'
        instanceId='countries-select'
        options={countries}
      />
    </main>
  )

}