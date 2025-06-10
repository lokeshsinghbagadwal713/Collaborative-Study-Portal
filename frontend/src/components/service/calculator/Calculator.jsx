// src/components/Calculator/Calculator.jsx
import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import { evaluate } from "mathjs";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate(); // Initialize navigate for handling back navigation

  const handleButtonClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        const res = evaluate(expression);
        setResult(res);
      } catch {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center justify-between relative">
      
      {/* Calculator Box */}
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
        {/* Display the current expression and result */}
        <Display expression={expression} result={result} />

        {/* Calculator buttons */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {[
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+",
            "C", "(", ")", "sin",
            "cos", "tan"
          ].map((btn) => (
            <Button key={btn} value={btn} onClick={() => handleButtonClick(btn)} />
          ))}
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="absolute bottom-16 bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Back
      </button>
    </div>
  );
};

export default Calculator;
