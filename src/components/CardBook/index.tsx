import styles from "./cardBook.module.css"
import getImages from "../../utils/getImages"
import {getBookNames, getAuthors } from "../../utils/getInfo";
import Button from "../Button";

const Index = () => {
    const booksCover = getImages(); 
    const booksName = getBookNames();
    const booksAuthor = getAuthors();

    return (
        <>
            {booksCover.map((cover, index) => (
                <div key={index} className={styles.cardContainer}>
                    <div className={styles.imgWrapper}>
                        <img src={cover} alt={booksName[index]+"-"+booksAuthor[index]} className={styles.bookCover} />
                    </div>
                    <hr className={styles.cardDivider}/>
                    <div className={styles.textWrapper}>
                        <h3 className={styles.name}>{booksName[index]}</h3>
                        <h4 className={styles.author}>{booksAuthor[index]}</h4>
                    </div>
                    <div className={styles.btnWrapper}>
                        <Button btnText="Book Info"/>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Index;
