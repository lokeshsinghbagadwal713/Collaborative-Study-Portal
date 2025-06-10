import React from 'react';

const SearchResults = ({ results, onVideoSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {results.map((video) => (
        <div
          key={video.id.videoId}
          className="border p-4 cursor-pointer rounded-lg hover:shadow-lg transition-shadow duration-300"
          onClick={() => onVideoSelect(video)}
        >
          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="w-full rounded-t-lg" />
          <h2 className="text-lg font-semibold mt-2">{video.snippet.title}</h2>
          <p className="text-gray-600">{video.snippet.channelTitle}</p>
          <p className="text-gray-500 mt-1">{video.snippet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
