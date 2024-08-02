import styles from "./cardBook.module.css"
import getImages from "../../utils/getImages"

interface info {
    title: string
    author: string
}

const Index = ({title, author}: info) => {
    const booksCover = getImages(); 

    return (
        <div className={styles.cardContainer}>
            {booksCover.map((book) => (
                <>
                    <img src={book} className={styles.bookCover} />
                    <h3 className={styles.name}>{title}</h3>
                    <h4 className={styles.author}>{author}</h4>
                </>
            ))}
        </div>
    )
};

export default Index;
