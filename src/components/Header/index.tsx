import styles from "./header.module.css"
import MainInfo from "./MainInfo"
import Navbar from "./Navbar/index"

const Header = () => {

    return (
        <div className={styles.headerContainer}>
            <MainInfo/>
            <Navbar/>
        </div>
    )
}

export default Header;