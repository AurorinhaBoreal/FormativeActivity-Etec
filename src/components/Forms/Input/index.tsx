import styles from "./input.module.css"

interface info {
    type: string,
    text: string,
    name: string,
    placeHolder: string,
}

const Input = ({type, text, name, placeHolder}: info) => {

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor={name+type}>{text}</label>
            <input 
                className={styles.input}
                name={name} 
                id={name+type} placeholder={placeHolder} 
                type={type}
            />
        </div>
    )
}

export default Input;