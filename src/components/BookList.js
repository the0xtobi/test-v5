import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow'

function BookList() {
   const { books } = useContext(BooksContext)
// BookList returns BookShow. It's mapped to display one of each book
// dont forget to pass a key prop!
    return (
        <div className='book-list'>
            {books.map((book) => {
                return <BookShow key={book.id} book={book} />
            })}
        </div>
    )
}

export default BookList;