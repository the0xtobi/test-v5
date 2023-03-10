import { useState, useContext } from 'react'
import BooksContext from '../context/books'

function BookCreate() {
    const [title, setTitle] = useState('')
    const { createBook } = useContext(BooksContext)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    // on submit we call the create book func
    const handleSubmit = (event) => {
        event.preventDefault()
        createBook(title)
        setTitle('')  // resets input space to empty right after calling the-
        // above function 
    }

    return (
        <div className='book-create'>
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input placeholder='add book...' className='input' value={title} onChange={handleChange} />
                <button className='button'>Click me!</button>
            </form>
        </div>
    )
}

export default BookCreate;