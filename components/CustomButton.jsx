import { Button } from 'reactstrap'
import Image from 'next/image'
import styles from '../styles/Button.module.scss'

export default function CustomButton(props) {
  return (
    <Button
      className={styles[props.color]}
    >
      {props.text}
      <Image src='/icons/plus.svg' alt='plus sign' width={16} height={16}/>
    </Button>
  )
}
