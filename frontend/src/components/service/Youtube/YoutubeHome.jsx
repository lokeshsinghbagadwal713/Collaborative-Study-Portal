import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResultd.jsx';
import  VideoPlayer from './VedioPlayer.jsx';
import useApi from '../../../ApiServices/Api.jsx';

const YoutubeHome = () => {
  const [results, setResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const api = useApi();

  const handleSearch = async (query) => {
    try {
      const response = await api.get('/youtubeSearch', {
        params: { query },
      });
      setResults(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
      </header>
      <main className="container mx-auto p-4 flex-grow">
        <div className="flex flex-col md:flex-row mt-4">
          <div className="md:w-2/3">
            <VideoPlayer video={selectedVideo} />
          </div>
          <div className="md:w-1/3 md:ml-4">
            <SearchResults results={results} onVideoSelect={handleVideoSelect} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default YoutubeHome;
