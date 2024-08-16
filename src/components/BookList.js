import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBook,deleteBook } from '../services/Api'; 
import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBook();
        setBooks(res.data);
        // console.log(books)
        console.log(books, "books")

      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };

    fetchBooks();
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteBook(id); 
  //     setBooks(books.filter(book => book._id !== id));
  //   } catch (error) {
  //     console.error('Error deleting book:', error);
  //   }
  // };


  const handleDelete = async (id) => {
    try {
      await deleteBook(id); 
      console.log("delete item checked")
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.error('Error ', error);
    }
  };


  const bookList =

    books.length === 0
      ? <p>There is no book record!</p>
      : books.map((book, k) =>           <BookCard book={book} key={k} handleDelete={handleDelete} />
      // console.log(books)
    );

  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
};

export default BookList;
