import { useState, useEffect } from 'react'
import axios from 'axios'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

// Good design is defining your logic in the app component

function App() {
  // This state serves as our list
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')

    setBooks(response.data)
  }

  
  // This is the func responsible for updating our value. We need to pick an id-
  // and if the id is true, we update the title with a new title
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book
    })

    setBooks(updatedBooks)
  }

  // This function is resposible for book deletion
  const deleteBookById = (id) => {
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

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
