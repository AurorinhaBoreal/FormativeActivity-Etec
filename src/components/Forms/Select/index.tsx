import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../types/Category";
import styles from "./select.module.css"

interface Info {
    options: Categoria[],
    placeholder: string,
    text: string,
    name: string,
    selected?: number,
    sendData: (e: ChangeEvent<HTMLSelectElement>) => void 
}

const Select = ({options, placeholder, text, name, sendData, selected}: Info) => {
    const [data, setData] = useState<ChangeEvent<HTMLSelectElement>>()
    const [selectedCat, setSelectedCat] = useState<number>()

    const sendDataToFather = (e: ChangeEvent<HTMLSelectElement>) => {
        setData(e)
        if (data != undefined) sendData(data)
    }

    useEffect(() => {
        setSelectedCat(selected)
    }, [selected])

    return (
        <div className={styles.selectWrapper}>
            <label className={styles.labelSel}>{text}</label>
            <select 
                className={styles.select} 
                name={name} 
                onChange={sendDataToFather}
                value={selectedCat}
            >
                <option value={0}>{placeholder}</option>
                {options.map((option) => (
                    <>
                        <option key={option.nome_categoria+option.cod_categoria} value={option.cod_categoria}>{option.nome_categoria}</option>
                    </>
                ))}
            </select>
        </div>
    )
}

export default Select;