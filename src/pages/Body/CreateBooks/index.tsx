import Select from "../../../components/Forms/Select"
import Input from "../../../components/Forms/Input"
import styles from "./createBooks.module.css"
import TextArea from "../../../components/Forms/TextArea"
import Button from "../../../components/Button"
import { ChangeEvent, useEffect, useState } from "react"
import Categoria from "../../../types/Category"
import Book from "../../../types/Book"
import { useNavigate } from "react-router-dom"
import firebaseInit from "../../../utils/firebaseBucket"

const CreateBooks = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState<Categoria[]>([]);
    const [book, setBook] = useState<Book>({
        nome_livro: "",
        descricao_livro: "",
        autor_livro: "",
        cod_categoria: 0
    });

    useEffect(() => {
        // fireBucket()
        fetch("http://localhost:3000/listagemCategorias", {
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
            setCategories(data.data);
            if (data.data.length > 0) {
                setBook(prevBook => ({
                    ...prevBook,
                    cod_categoria: data.data[0].cod_categoria
                }));
            }
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
    }, []);

    const createBook = (e: React.FormEvent) => {
        e.preventDefault()

        fetch("http://localhost:3000/inserirLivro", {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-ALlow-Origin': '*',
                'AcceSS-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(book)  
        })
        .then(
            (resp)=>resp.json()
        )
        .then(
            ()=>{
                navigate("/books/list")
            }
        )
        .catch(
            (err)=>{console.log(err)}
        )
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setBook({...book,
            [name]: value
        });
    }

    const handleFile = () => {
        
    }

    return (
        <div className={styles.backgroundImg}>
            <div className={styles.formsContainer}>
                <h2 className={styles.title}>Cadastro de Livros</h2>
                <h4 className={styles.description}>Insira os dados para o cadastro de um livro.</h4>
                <div className={styles.inputWrapper}>
                    <div className={styles.flexer}>
                        <Input
                            sendData={handleChange}
                            text="Inform the Book's Title:"
                            type="text"
                            name="nome_livro"
                            placeHolder="Dune"
                        />
                        <Input
                            sendData={handleChange}
                            text="Inform the Book's Author:"
                            type="text"
                            name="autor_livro"
                            placeHolder="Frank Herbert"
                        />
                    </div>
                    <div className={styles.flexer}>
                        <TextArea
                            sendData={handleChange}
                            name="descricao_livro"
                            placeHolder="Dune is a book about deserts and giant worms"
                            text="Inform the Book's Description"
                        />
                        <Select
                            sendData={handleChange}
                            name="cod_categoria"
                            options={categories}
                            text="Select the book's category:"
                            placeholder="---"
                        />
                    </div>
                    {/* <Input
                        name="capa_livro"
                        placeHolder="capa.png"
                        text="Send the Book Cover file"
                        sendData={handleFile}
                        type="file"
                        /> */}
                </div>
                <Button
                    afterClick={createBook}
                    btnText="Register Book"
                />
            </div>
        </div>
    );
}

export default CreateBooks;
