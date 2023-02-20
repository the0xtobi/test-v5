import { useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

// Good design is defining your logic in the app component

function App() {
  

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
