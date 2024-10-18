import styles from "./cardBook.module.css"
import getImages from "../../utils/getImages"
import Button from "../Button";
import { useEffect, useState } from "react";
import Book from "../../types/Book";

const Index = () => {
    const [booksInfo, setBooksInfo] = useState<Book[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/listagemLivros", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", // Correct MIME type
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data.data);
            setBooksInfo(data.data)
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
    }, []);

    const booksCover = getImages();

    return (
        <>
            {booksInfo.map((book, index) => (
                <div key={index} className={styles.cardContainer}>
                    <div className={styles.imgWrapper}>
                        <img src={booksCover[index]} className={styles.bookCover} />
                    </div>
                    <hr className={styles.cardDivider}/>
                    <div className={styles.textWrapper}>
                        <h3 className={styles.name}>{book.nome_livro}</h3>
                        <h4 className={styles.author}>{book.autor_livro}</h4>
                    </div>
                    {/* <div className={styles.btnWrapper}>
                        <Button btnText="Book Info"/>
                    </div> */}
                </div>
            ))}
        </>
    )
};

export default Index;
