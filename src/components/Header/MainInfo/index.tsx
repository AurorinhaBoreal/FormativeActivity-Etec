import styles from "./mainInfo.module.css"

const MainInfo = () => {

    return (
        <>
            <img className={styles.img} src="logo.png"/>
            <h1 className={styles.title}>BOOHks</h1>
        </>
    )
}

export default MainInfo;