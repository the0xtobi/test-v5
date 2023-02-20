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




        return (
            <BooksContext.Provider value={value} >
                {children}
            </BooksContext.Provider>
        )
    }


    export { Provider };
    export default BooksContext;