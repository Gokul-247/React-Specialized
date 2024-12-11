import React from 'react'
import books from "../Assets/Static/book.json"

const BookList = () => {
  return (
    <div>
        <table border={2} cellPadding={2} cellSpacing={0}>
            <caption>List of Books</caption>
            <thead>
                <b><tr>
                    <td>Book Id</td>
                    <td>Book Title</td>
                    <td>Author Name</td>
                </tr></b>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default BookList