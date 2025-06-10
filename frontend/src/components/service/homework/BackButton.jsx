import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const history = useNavigate();

  return (
    <button
      onClick={() => history(-1)}
      className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition self-center"
    >
      Go Back
    </button>
  );
};

export default BackButton;
