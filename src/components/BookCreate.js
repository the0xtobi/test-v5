import { useState } from 'react'

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('')
    
    return (
        <div>
            <form>
                <label>Title</label>
                <input />
            </form>
        </div>
    )
}

export default BookCreate;