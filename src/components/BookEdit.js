import { useState } from 'react'

function BookEdit({ book, onSubmit, showEdit }) {
    // We need a state to store user's input
    const [title, setTitle] = useState(book.title)

    // This records whatever value is typed in the input box
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    // the event.preventdefault prevents the form from handing submission the -
    // default HTML way
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(book.id, title)
        
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