import React, { useState } from 'react';
import axios from 'axios';
import WebSearchBar from './WebSearchBar.jsx';
import WebSearchReuslt from './WebSearchReuslt.jsx';

const geminiApiKey = 'AIzaSyCDi0jZ3mvH0mqX9RwFH63d8GLJDmjc4p0';

function WebHome() {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`https://api.geminiapi.com/search`, {
                params: { q: query },
                headers: {
                    'Authorization': `Bearer ${geminiApiKey}`
                }
            });
            setResults(response.data.items);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className='container mx-auto p-4'>
            <WebSearchBar onSearch={handleSearch} />
            <WebSearchReuslt results={results} />
        </div>
    );
}

export default WebHome;
