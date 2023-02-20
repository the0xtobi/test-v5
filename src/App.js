import { useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

// Good design is defining your logic in the app component

function App() {
  

  useEffect(() => {
    fetchBooks()
  }, [])
  // This is the func responsible for updating our value. We need to pick an id-
  // and if the id is true, we update the title with a new title
  

  

  // This function is resposible for book deletion
  

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
