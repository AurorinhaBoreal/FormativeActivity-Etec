import { ChangeEvent, useState } from "react"
import styles from "./textArea.module.css"

interface info {
    name: string,
    text: string,
    placeHolder: string,
    sendData: (e: ChangeEvent<HTMLTextAreaElement>) => void 
}

const TextArea = ({text, placeHolder, name, sendData}: info) => {
    const [data, setData] = useState<ChangeEvent<HTMLTextAreaElement>>()

    const sendDataToFather = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setData(e)
        if (data != undefined) sendData(data)
    }

    return(
        <div className={styles.labelWrapper}>
            <label className={styles.labelTA} htmlFor={name}>{text}</label>
            <textarea
                onChange={sendDataToFather}
                className={styles.textArea}
                placeholder={placeHolder}
                name={name}
                id={name}
            />
        </div>
    )
}

export default TextArea;