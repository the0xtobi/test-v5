import { useState } from 'react'
import BookEdit from './BookEdit'

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) =>{
        setShowEdit(false)
        onEdit(id, newTitle)
    }

    // this will serve as the condition that determines what we see/ displayed
    let content = <h3>{book.title}</h3>  // initial value
    if (showEdit) { //if showEdit is true, we update content it displays book edit
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }

    return (
        <div className='book-show'>
            {content}
            <div className='actions'>
                <button className='edit' onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;