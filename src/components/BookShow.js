import { useState } from 'react'

function BookShow({ book, onDelete }) {
    const [showEdit, setShowEdit] = useState(false)
    
    const handleClick = () =>{
        onDelete(book.id)
    }
    return (
        <div className='book-show'>
            {book.title}
            <div className='actions'>
                <button className='edit'>
                    Edit
                </button>
                <button className="delete" onClick={handleClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;