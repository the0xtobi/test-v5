function BookList({ books }){
    const renderedBooks = books.map((book)=>{
        return <BookShow />
    })
    return(
        <div>

        </div>
    )
}

export default BookList;