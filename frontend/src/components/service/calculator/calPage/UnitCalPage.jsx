// src/pages/UnitConverterPage.jsx
import React from "react";
import UnitConverter from '../UnitConvertor.jsx';

const UnitConverterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 p-6 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
        <UnitConverter />
      </div>
    </div>
  );
};

export default UnitConverterPage;
