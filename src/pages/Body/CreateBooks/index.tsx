import Select from "../../../components/Forms/Select"
import Input from "../../../components/Forms/Input"
import styles from "./createBooks.module.css"
import TextArea from "../../../components/Forms/TextArea"
import Button from "../../../components/Button"

const CreateBooks = () => {
    return (
        <>
            <div className={styles.backgroundImg}>
                <div className={styles.formsContainer}>
                    <h2 className={styles.title}>Cadastro de Livros</h2>
                    <h4 className={styles.description}>Insira os dados para o cadastro de um livro.</h4>
                    <div className={styles.inputWrapper}>
                        <div className={styles.flexer}>
                            <Input
                                text="Inform the Book's Title:"
                                type="text"
                                name="iBookName"
                                placeHolder="Dune"
                            />
                            <Input
                                text="Inform the Book's Author:"
                                type="text"
                                name="iBookAuthor"
                                placeHolder="Frank Herbert"
                            />
                        </div>
                        <div className={styles.flexer}>
                            <TextArea
                                name="taBookDescription"
                                placeHolder="Dune is a book about deserts and giant worms"
                                text="Inform the Book's Description"
                            />
                            <Select
                                options={["Fantasy", "Terror", "Romance"]}
                                text="Select the book's category:"
                                placeholder="---"
                            />
                        </div>
                    </div>
                    <Button 
                        btnText="Register Book"
                    />
                </div>
            </div>
        </>
    )
}

export default CreateBooks