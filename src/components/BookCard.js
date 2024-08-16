import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, handleDelete }) => {

    console.log(handleDelete);
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.bookTitle}</Link>
        </h2>
        <h3>{book.bookAuthor}</h3>
        <div className='flex'>
       
        <p>{book.description} <span><button onClick={() => handleDelete(book._id)} className="btn mr-2">X</button>
        </span></p>
        </div>
       
      </div>
    </div>
  );
};

export default BookCard;
