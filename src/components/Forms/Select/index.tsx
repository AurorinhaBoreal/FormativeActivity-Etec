import styles from "./select.module.css"

interface info {
    options: string[],
    placeholder: string,
    text: string
}
const Select = ({options, placeholder, text}: info) => {
    return (
        <div className={styles.selectWrapper}>
            <label className={styles.labelSel}>{text}</label>
            <select className={styles.select}>
                <option value={-1}>{placeholder}</option>
                {options.map((option: string) => (
                    <>
                        <option value={option}>{option}</option>
                    </>
                ))}
            </select>
        </div>
    )
}

export default Select;