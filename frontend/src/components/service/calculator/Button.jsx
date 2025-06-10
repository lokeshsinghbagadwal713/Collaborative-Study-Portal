// src/components/Calculator/Button.jsx
import React from "react";

const Button = ({ value, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white p-4 rounded-lg shadow-md hover:bg-blue-700 transform transition duration-150"
  >
    {value}
  </button>
);

export default Button;
