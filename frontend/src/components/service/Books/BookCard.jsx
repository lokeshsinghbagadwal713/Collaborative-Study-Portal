// src/components/Books/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { title, authors, imageLinks, id } = book;

  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300">
      <img
        src={imageLinks?.thumbnail || 'https://via.placeholder.com/128x180'}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">by {authors?.join(', ')}</p>
      <Link to={`/services/book-details/${id}`} className="text-blue-500 mt-2 block">View Details</Link>
    </div>
  );
};

export default BookCard;
