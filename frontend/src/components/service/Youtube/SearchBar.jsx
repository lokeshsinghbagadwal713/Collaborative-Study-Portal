import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-2/3 rounded-lg"
        placeholder="Search YouTube"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Search
      </button>
      <button 
        onClick={() => navigate(-1)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
      >
        Back
      </button>
    </form>
  );
};

export default SearchBar;
