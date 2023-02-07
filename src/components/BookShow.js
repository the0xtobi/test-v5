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

    // this will serve as
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onEdit={onEdit} book={book} />
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