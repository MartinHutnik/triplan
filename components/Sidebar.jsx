import styles from '../styles/Sidebar.module.scss'

export default function Sidebar(props) {

  const paragraphs = props.paragraphs

  return (
    <aside className={styles.sidebar}>
      {paragraphs ?
        <>
        <h2>Tips & tricks</h2>
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
        </>
        :
        <p>Show all trips</p>
      }
    </aside>
  )
}