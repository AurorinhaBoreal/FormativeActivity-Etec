import styles from "./button.module.css"

interface info {
    btnText: string
}
const Button = ({btnText}: info) => {

    const handleClick = () => {
        window.open("https://aurora-kruschewsky-portfolio.onrender.com")
    }
    return (
        <div>
            <button 
                className={styles.button}
                onClick={handleClick}
            >{btnText}</button>
        </div>
    )
}

export default Button;