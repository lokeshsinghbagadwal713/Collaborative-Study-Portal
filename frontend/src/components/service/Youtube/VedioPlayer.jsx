import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div className="flex justify-center items-center h-64 md:h-96 bg-gray-200">Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-player bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="video-wrapper">
        <iframe
          title="video player"
          className="w-full h-64 md:h-96"
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600">{video.snippet.title}</h2>
        <p className="text-gray-600">{video.snippet.channelTitle}</p>
        <p className="text-gray-500 mt-2">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
