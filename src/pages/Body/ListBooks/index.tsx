import styles from "./listBooks.module.css"
import CardBook from "../../../components/CardBook"

export default function ListBooks() {
  return (
    <>
      <div className={styles.container}>
        <CardBook/>
      </div>
    </>
  )
}
