import { Button } from 'reactstrap'
import Image from 'next/image'
import styles from '../styles/Button.module.scss'

export default function CustomButton(props) {

  const classesList = props.styles.map(style => styles[style]).join(' ')

  return (
    <Button
      className={classesList}
    >
      {props.text}
      <Image
        src={`/icons/${props.imageName}.svg`}
        alt={`${props.Name} sign`}
        width={props.imageWidth}
        height={props.imageHeight}
      />
    </Button>
  )
}
