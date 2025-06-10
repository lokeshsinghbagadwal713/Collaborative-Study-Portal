// src/components/Calculator/ComplexCalculator.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const ComplexCalculator = () => {
  const [realPart, setRealPart] = useState("");
  const [imaginaryPart, setImaginaryPart] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate(); // Initialize navigate for handling back navigation

  const handleAddition = () => {
    // Perform complex number addition (real + imaginary part) or other operations here
    setResult(`Result: ${realPart} + ${imaginaryPart}i`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center justify-center relative">
      
      {/* Back button positioned outside the calculator box */}
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Back
      </button>

      {/* Complex Calculator Box */}
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
        {/* Input fields for real and imaginary parts */}
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            value={realPart}
            onChange={(e) => setRealPart(e.target.value)}
            placeholder="Real Part"
            className="p-4 rounded-md shadow-md border border-gray-300"
          />
          <input
            type="number"
            value={imaginaryPart}
            onChange={(e) => setImaginaryPart(e.target.value)}
            placeholder="Imaginary Part"
            className="p-4 rounded-md shadow-md border border-gray-300"
          />
          <button
            onClick={handleAddition}
            className="bg-blue-500 text-white p-4 rounded-md shadow-md"
          >
            Add Complex Numbers
          </button>
          <div className="text-xl mt-4">{result}</div>
        </div>
      </div>
    </div>
  );
};

export default ComplexCalculator;
