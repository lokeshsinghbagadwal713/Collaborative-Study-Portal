// src/components/Books/BookSearch.jsx
import React, { useState } from 'react';
import BookList from './BookList';
import axios from 'axios';

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
        params: {
          q: searchQuery,
          maxResults: 20,
        },
      });
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="Search for books..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-4 border border-gray-300 rounded-lg w-full mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-3 rounded-lg w-full mb-4 hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default BookSearch;
