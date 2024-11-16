import { ChangeEvent, useState } from "react"
import styles from "./input.module.css"

interface info {
    type: string,
    text: string,
    name: string,
    placeHolder: string,
    sendData: (e: ChangeEvent<HTMLInputElement>) => void 
}

const Input = ({type, text, name, placeHolder, sendData}: info) => {
    const [data, setData] = useState<ChangeEvent<HTMLInputElement>>()

    const sendDataToFather = (e: ChangeEvent<HTMLInputElement>) => {
        setData(e)
        if (data != undefined) sendData(data)
    }
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor={name+type}>{text}</label>
            <input 
                onChange={sendDataToFather}
                className={styles.input}
                name={name} 
                id={name+type} placeholder={placeHolder} 
                type={type}
            />
        </div>
    )
}

export default Input;