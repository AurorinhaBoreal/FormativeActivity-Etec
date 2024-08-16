import styles from "./header.module.css"
import logo from "../../assets/logo.png"

const Header = () => {

    return (
        <div className={styles.headerContainer}>
            <img className={styles.img} src={logo}/>
            <h1 className={styles.title}>BOOHks</h1>
        </div>
    )
}

export default Header;