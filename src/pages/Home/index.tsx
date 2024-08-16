import styles from "./home.module.css"
import CardBook from "../../components/CardBook"
import Header from "../../components/Header"

export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <CardBook/>
      </div>
    </>
  )
}
