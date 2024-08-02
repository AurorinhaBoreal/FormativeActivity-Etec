import styles from "./h.module.css"
import CardBook from "../../components/CardBook"

export default function Home() {
  return (
    <div className={styles.container}>
        <CardBook
          title="Duna"
          author="Frank Herbert"
        />
    </div>
  )
}
