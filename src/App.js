import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

// Good design is defining your logic in the 

function App() {
  const [books, setBooks] = useState([])

  // This function is resposible for book deletion
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  // This function is called when the user want to input/create a book
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title }];
    setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
