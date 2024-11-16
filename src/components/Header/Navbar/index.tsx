import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

const Navbar = () => {

    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.textContainer}>
                <hr/>
                <Link to={"/"} className={styles.link}>
                    <li>Home</li>
                </Link>
                <hr/>
                <Link to={"/books/list"}>
                    <li>List Books</li>
                </Link>
                <hr/>
                <Link to={"/books/create"}>
                    <li>Register Books</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar