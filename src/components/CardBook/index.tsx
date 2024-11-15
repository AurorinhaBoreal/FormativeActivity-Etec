import styles from "./cardBook.module.css"
import getImages from "../../utils/getImages"
import Button from "../Button";
import { useEffect, useState } from "react";
import Book from "../../types/Book";
import Modal from "../Modal";

const Index = () => {
    const [booksInfo, setBooksInfo] = useState<Book[]>([])
    const [selectedBook, setSelectedBook] = useState<Book | null>(null)

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
            setBooksInfo(data.data)
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
    }, []);

    const booksCover = getImages();

    return (
        <>
            {booksInfo.length <= 0 ? (
                <div className={styles.noBooks}>
                    <h3 className={styles.noBooksText}>
                        We don't have registered books to show. If you want to visualize them, go to the register page.
                    </h3>
                </div>
            ) : (
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
                        <div className={styles.btnWrapper}>
                            <Button
                                btnText="Book Info" 
                                afterClick={() => setSelectedBook(book)}
                            />
                            {selectedBook && <Modal bookInfo={selectedBook} setModalVisible={() => setSelectedBook(null)}/>}
                        </div>
                    </div>))}
                </>
            )}
        </>
    )
};

export default Index;
