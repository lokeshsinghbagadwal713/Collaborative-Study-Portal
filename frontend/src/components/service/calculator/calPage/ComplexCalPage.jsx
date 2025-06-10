// src/pages/ComplexCalculatorPage.jsx
import React from "react";
import ComplexCalculator from "../ComplexCalculator.jsx";

const ComplexCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800 p-6 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
        <ComplexCalculator />
      </div>
    </div>
  );
};

export default ComplexCalculatorPage;
