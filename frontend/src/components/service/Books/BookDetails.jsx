import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(response.data.volumeInfo);
        setError(null);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError('Failed to load book details');
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">Loading...</div> {/* Add your own loading animation */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <BackButton onClick={() => history(-1)} />
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <img
          src={book.imageLinks?.thumbnail || 'https://via.placeholder.com/200x300'}
          alt={book.title}
          className="w-48 h-72 object-cover rounded-md mb-4 shadow-md"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">{book.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{book.authors?.join(', ')}</p>
        <p className="text-lg text-gray-700 mb-6">{book.description || 'No description available'}</p>
        {book.infoLink && (
          <a
            href={book.infoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
