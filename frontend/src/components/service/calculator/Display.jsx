// src/components/Calculator/Display.jsx
import React from "react";

const Display = ({ expression, result }) => (
  <div className="w-full bg-gray-800 text-white p-4 rounded-lg shadow-md">
    <div className="text-lg font-mono">{expression || "0"}</div>
    <div className="text-3xl font-bold">{result}</div>
  </div>
);

export default Display;
