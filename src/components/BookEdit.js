import { useState } from 'react'

function BookEdit({ book, onEdit }) {
    // We need a state to store user's input
    const [title, setTitle] = useState(book.title)

    // This records
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onEdit(book.id, title)
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