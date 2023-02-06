import BookShow from './BookShow'

function BookList({ books, onDelete, onEdit }) {
// BookList returns BookShow
    return (
        <div className='book-list'>
            {books.map((book) => {
                return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
            })}
        </div>
    )
}

export default BookList;