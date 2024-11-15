import { useNavigate } from "react-router-dom"
import styles from "./home.module.css"

export default function Home() {
  const navigate = useNavigate()

  const navigateTo = (path: string) => {
    navigate(path);
  }
  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.homeImg} src="bookHome.jpg" />
        </div>
        <div className={styles.info}>
          <img className={styles.homeLogo} src="logo.png"/>
          <h1 className={styles.slogan}>Welcome to BOOHks! Don't get scared with our massive library!</h1>
          <div>
            <button onClick={() => navigateTo("/books/list")}>
              See Books
            </button>
            <button onClick={() => navigateTo("/books/create")}>
              Add Book
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
