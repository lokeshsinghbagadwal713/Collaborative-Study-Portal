import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-200"
    >
      Go Back
    </button>
  );
};

export default BackButton;
