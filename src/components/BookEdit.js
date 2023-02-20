import { useState, useContext } from 'react'
import BooksContext from '../context/books'

function BookEdit({ book, onSubmit }) {
    // We need a state to store user's input
    const [title, setTitle] = useState(book.title)
    const { editBookById } = useContext(BooksContext)

    // This records whatever value is typed in the input box
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    // the event.preventdefault prevents the form from handing submission the -
    // default HTML way
    const handleSubmit = (event) => {
        event.preventDefault()
        editBookById(book.id, title)
        onSubmit()
    }

    return (
        <form className='book-edit' onSubmit={handleSubmit} >
            <label>Title</label>
            <input className='input' onChange={handleChange} value={title} />
            <button className='button is-primary'>
                Save
            </button>
        </form>
    )
}

export default BookEdit;