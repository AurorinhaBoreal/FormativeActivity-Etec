import Select from "../../../components/Forms/Select"
import Input from "../../../components/Forms/Input"
import styles from "./updateBooks.module.css"
import TextArea from "../../../components/Forms/TextArea"
import Button from "../../../components/Button"
import { ChangeEvent, useEffect, useState } from "react"
import Categoria from "../../../types/Category"
import Book from "../../../types/Book"
import { useNavigate, useParams } from "react-router-dom"

const UpdateBooks = () => {
    const { nome_livro } = useParams()
    const [formattedName, setFormattedName ] = useState("")
    const navigate = useNavigate()
    const [categories, setCategories] = useState<Categoria[]>([]);
    const [book, setBook] = useState<Book>({
        nome_livro: "",
        descricao_livro: "",
        autor_livro: "",
        cod_categoria: 0
    });

    const updateBook = (e: React.FormEvent) => {
        e.preventDefault()

        fetch("http://localhost:3000/alterarLivro", {
            method: 'PUT',
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
        .then(()=>{
            setTimeout(() => {
                navigate("/books/list")
            }, 500)}
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

    useEffect(() => {
        if (nome_livro?.includes("-")) {
            setFormattedName(nome_livro.replace("-", " "))
        }
    
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

        fetch("http://localhost:3000/listagemLivro/"+formattedName, {
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
            setBook(data.data);
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
    }, [nome_livro, formattedName]);


    return (
        <div className={styles.backgroundImg}>
            <div className={styles.formsContainer}>
                <h2 className={styles.title}>Listagem de Livros</h2>
                <h4 className={styles.description}>Insira os dados para atualizar {book.nome_livro}.</h4>
                <div className={styles.inputWrapper}>
                    <div className={styles.flexer}>
                        <Input
                            sendData={handleChange}
                            text="Update the Book's Title:"
                            type="text"
                            name="nome_livro"
                            placeHolder={book.nome_livro}
                        />
                        <Input
                            sendData={handleChange}
                            text="Update the Book's Author:"
                            type="text"
                            name="autor_livro"
                            placeHolder={book.autor_livro}
                        />
                    </div>
                    <div className={styles.flexer}>
                        <TextArea
                            sendData={handleChange}
                            name="descricao_livro"
                            placeHolder={book.descricao_livro}
                            text="Update the Book's Description"
                        />
                        <Select
                            sendData={handleChange}
                            name="cod_categoria"
                            options={categories}
                            selected={book.cod_categoria}
                            text="Update the book's category:"
                            placeholder="---"
                        />
                    </div>
                </div>
                <Button
                    afterClick={updateBook}
                    btnText="Update Book"
                />
            </div>
        </div>
    );
}

export default UpdateBooks