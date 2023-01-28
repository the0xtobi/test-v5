import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    console.log('i need this book', title)
  }
  return (
    <div className="App">
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
