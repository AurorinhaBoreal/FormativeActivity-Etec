import styles from "./home.module.css"

export default function Home() {
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
            <button>
              See Books
            </button>
            <button>
              Add Book
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
