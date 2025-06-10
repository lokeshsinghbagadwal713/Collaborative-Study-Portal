import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CHome = () => {
  const navigate = useNavigate(); // For Back button navigation

  return (
    <div className="min-h-screen flex flex-col justify-between"> {/* Full height container */}
      
      {/* Main content */}
      <div className="flex flex-wrap justify-center gap-6 p-8 flex-grow"> {/* Reduced gap between rows */}
        <Link to="/scientific">
          <div className="bg-blue-500 hover:bg-blue-700 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold">Scientific Calculator</h2>
            <p>Advanced mathematical functions and operations</p>
          </div>
        </Link>
        <Link to="/unit-convertor">
          <div className="bg-green-500 hover:bg-green-700 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold">Unit Converter</h2>
            <p>Convert units like length, mass, temperature, etc.</p>
          </div>
        </Link>
        <Link to="/complex">
          <div className="bg-purple-500 hover:bg-purple-700 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold">Complex Number Calculator</h2>
            <p>Handle complex number operations</p>
          </div>
        </Link>
        <Link to="/graphing-calculator">
          <div className="bg-red-500 hover:bg-red-700 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold">Graphing Calculator</h2>
            <p>Graph mathematical functions visually</p>
          </div>
        </Link>
      </div>

      {/* Back Button */}
      <div className="flex justify-center p-4">
        <button
          onClick={() => navigate(-1)} // Go to the previous route
          className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-6 rounded-lg shadow-md"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CHome;
