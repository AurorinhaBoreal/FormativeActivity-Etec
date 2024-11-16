import styles from "./mainInfo.module.css"
import logo from "/logo.png"

const MainInfo = () => {

    return (
        <>
            <img className={styles.img} src={logo}/>
            <h1 className={styles.title}>BOOHks</h1>
        </>
    )
}

export default MainInfo;