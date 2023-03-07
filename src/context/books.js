import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext()

function Provider({ children }) {
    // This state serves as our list
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book
        })

        setBooks(updatedBooks
    }

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatedBooks)
    }

    // This function is called when the user want to input/create a book
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',
            {
                title: title
            })

        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks)
    }

    const value = {
        books,
        fetchBooks,
        editBookById,
        deleteBookById,
        createBook
    }


    return (
        <BooksContext.Provider value={value} >
            {children}
        </BooksContext.Provider>
    )
}


export { Provider };
export default BooksContext;