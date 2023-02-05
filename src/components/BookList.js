import BookShow from './BookShow'

function BookList({ books, onDelete }) {

    return (
        <div className='book-list'>
            {books.map((book) => {
                return <BookShow onDelete={onDelete} key={book.id} book={book} />
            })}
        </div>
    )
}

export default BookList;