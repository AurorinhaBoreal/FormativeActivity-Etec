import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Book from '../../types/Book'
import styles from './modal.module.css'
import getImages from '../../utils/getImages'
import { useNavigate } from 'react-router-dom'

interface info {
    bookInfo: Book
    setModalVisible: Dispatch<SetStateAction<boolean>>
}

const Modal = ({bookInfo, setModalVisible}: info) => {
    const navigate = useNavigate()
    const [book, setBook] = useState<Book>()
    const bookCover = getImages();

    const editBook = () => {
        let formattedName = ""
        if ((book?.nome_livro?.includes(" "))) {
            formattedName = book?.nome_livro.replace(" ", "-")
        } else {
            {book?.nome_livro 
                ? formattedName = book.nome_livro 
                : ""
            }
        }

        navigate("/books/update/"+formattedName)        
    }

    const deleteBook = () => {
        fetch("http://localhost:3000/excluirLivro/"+book?.nome_livro, {
            method: 'DELETE',
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
        .catch((error) => {
            console.error("Fetch error:", error);
        });

        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    useEffect(() => {
        setBook(bookInfo);
    }, [bookInfo])

    return (
        <div className={styles.modalPosition}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <button className={styles.closeButton} onClick={() => setModalVisible(false)}>X</button>
                </div>
                <div className={styles.modalBody}>
                    <img src={bookCover[0]} className={styles.modalImg}/>
                    <div className={styles.modalInfo}>
                        <h1>{book?.nome_livro}</h1>
                        <h5 className={styles.modalDescription}>
                            {book?.descricao_livro}
                        </h5>
                        <h5 style={{opacity: 0.8}}>{book?.autor_livro}</h5>
                    </div>
                </div>
                <div className={styles.btnWrapper}>
                    <button onClick={() => editBook()}>
                        Edit
                    </button>
                    <button onClick={() => deleteBook()}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;