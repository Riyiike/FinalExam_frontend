// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import { addBook, updateBook, getBookbyID } from '../services/Api';
import { useParams, useNavigate } from 'react-router-dom';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      loadBook();
    }
  }, [id]);

  const loadBook = async () => {
    const response = await getBookbyID(id);
    const book = response.data;
    setBookTitle(book.bookTitle);
    setBookAuthor(book.bookAuthor);
    setDescription(book.description);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = {
      bookTitle,
      bookAuthor,
      description,
    };

    if (id) {
      await updateBook(id, bookData);
    } else {
      await addBook(bookData);
    }

    navigate('/');
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br /><a className="btn btn-info float-left" href="/">Show Book List</a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">{id ? "Edit Book" : "Add Book"}</h1>
            <p className="lead text-center">{id ? "Update book details" : "Create new book"}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="bookTitle"
                  className="form-control"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="bookAuthor"
                  className="form-control"
                  value={bookAuthor}
                  onChange={(e) => setBookAuthor(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" value={id ? "Update Book" : "Add Book"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
