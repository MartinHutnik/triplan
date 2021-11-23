import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'
import styles from '../styles/Navigation.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href='/'><a className={styles.logo}>
        <Image src='/cleevio.svg' alt='Cleevio logo' width={134} height={38}/>
      </a></Link>
      <Link href='/trips'><a>
        <CustomButton
          color='yellow'
          text='New Trip'
        />
      </a></Link>
      <Link href='/'><a>
        <div className={styles.yourTrips}>
          <Image src='/icons/time.svg' alt='clock icon' width={16} height={16}/>
          <span>Your trips</span>
        </div>
      </a></Link>
    </nav>
  )
}