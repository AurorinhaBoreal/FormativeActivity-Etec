import styles from "./textArea.module.css"

interface info {
    name: string,
    text: string,
    placeHolder: string,
}

const TextArea = ({text, placeHolder, name}: info) => {

    return(
        <div className={styles.labelWrapper}>
            <label className={styles.labelTA} htmlFor={name}>{text}</label>
            <textarea
                className={styles.textArea}
                placeholder={placeHolder}
                name={name}
                id={name}
            />
        </div>
    )
}

export default TextArea;