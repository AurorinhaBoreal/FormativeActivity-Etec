import styles from "./button.module.css"

interface info {
    btnText: string
    afterClick: (e: React.FormEvent) => void
}
const Button = ({btnText, afterClick}: info) => {
    return (
        <div>
            <button 
                className={styles.button}
                onClick={afterClick}
            >{btnText}</button>
        </div>
    )
}

export default Button;