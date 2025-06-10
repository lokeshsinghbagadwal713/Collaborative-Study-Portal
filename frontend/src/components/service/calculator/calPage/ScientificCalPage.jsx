// src/pages/ScientificCalculatorPage.jsx
import React from "react";
import Calculator from '../Calculator.jsx';

const ScientificCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 p-6 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
        <Calculator />
      </div>
    </div>
  );
};

export default ScientificCalculatorPage;
