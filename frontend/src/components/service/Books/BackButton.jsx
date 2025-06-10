// src/components/Books/BackButton.jsx
import React from 'react';

const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 text-black p-3 rounded-lg mb-4 hover:bg-gray-400 transition duration-300"
    >
      ← Back
    </button>
  );
};

export default BackButton;
