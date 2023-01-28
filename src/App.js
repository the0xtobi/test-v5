import { useState } from 'react'
import BookCreate from './components/BookCreate'
import './App.css';

function App() {
  const [books, setBooks] = useState([])

  const handleCreateBook = () => {

  }
  return (
    <div className="App">
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
