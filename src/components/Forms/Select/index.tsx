import { ChangeEvent, useState } from "react";
import Categoria from "../../../types/Category";
import styles from "./select.module.css"

interface Info {
    options: Categoria[],
    placeholder: string,
    text: string,
    name: string,
    sendData: (e: ChangeEvent<HTMLSelectElement>) => void 
}

const Select = ({options, placeholder, text, name, sendData}: Info) => {
    const [data, setData] = useState<ChangeEvent<HTMLSelectElement>>()

    const sendDataToFather = (e: ChangeEvent<HTMLSelectElement>) => {
        setData(e)
        if (data != undefined) sendData(data)
    }

    return (
        <div className={styles.selectWrapper}>
            <label className={styles.labelSel}>{text}</label>
            <select className={styles.select} name={name} onChange={sendDataToFather}>
                <option value={-1}>{placeholder}</option>
                {options.map((option) => (
                    <>
                        <option key={option.nome_categoria+option.cod_categoria} value={option.nome_categoria}>{option.nome_categoria}</option>
                    </>
                ))}
            </select>
        </div>
    )
}

export default Select;