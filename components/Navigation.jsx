import Image from 'next/image'
import CustomButton from './CustomButton'
import styles from '../styles/Navigation.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Image src='/cleevio.svg' alt='Cleevio logo' width={134} height={38}/>
      </div>
      <CustomButton
        color='yellow'
        text='New Trip'
      />
      <div className={styles.yourTrips}>
        <Image src='/icons/time.svg' alt='clock icon' width={16} height={16}/>
        <span>Your trips</span>
      </div>
    </nav>
  )
}