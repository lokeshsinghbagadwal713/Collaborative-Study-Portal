import React, { useState } from 'react'

function WebSearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                className="border p-2 w-2/3 rounded-lg" placeholder="Search..." />
            <button type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Search
            </button>
        </form>
    );
};

export default WebSearchBar