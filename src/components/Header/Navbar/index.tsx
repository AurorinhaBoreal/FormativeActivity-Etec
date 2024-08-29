import styles from "./navbar.module.css"

const Navbar = () => {

    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.textContainer}>
                <hr className={styles.navbarDivider}/>
                <li className={styles.navbarTitle}>Home</li>
                <hr className={styles.navbarDivider}/>
                <li className={styles.navbarTitle}>Register Books</li>
                <hr className={styles.navbarDivider}/>
                <li className={styles.navbarTitle}>List Books</li>
            </ul>
        </nav>
    )
}

export default Navbar