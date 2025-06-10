import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UnitConverter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("yards");
  const [category, setCategory] = useState("length");

  // Conversion formulas
  const conversionFormulas = {
    length: {
      meters: {
        meters: 1,
        yards: 1.094,
        kilometers: 0.001,
        miles: 0.000621371,
        feet: 3.281,
        inches: 39.37,
      },
      yards: {
        meters: 0.9144,
        yards: 1,
        kilometers: 0.0009144,
        miles: 0.000568182,
        feet: 3,
        inches: 36,
      },
      kilometers: {
        meters: 1000,
        yards: 1094,
        kilometers: 1,
        miles: 0.621371,
        feet: 3280.84,
        inches: 39370.1,
      },
      miles: {
        meters: 1609.34,
        yards: 1760,
        kilometers: 1.60934,
        miles: 1,
        feet: 5280,
        inches: 63360,
      },
    },
    temperature: {
      celsius: {
        celsius: 1,
        fahrenheit: (val) => (val * 9) / 5 + 32,
        kelvin: (val) => val + 273.15,
      },
      fahrenheit: {
        celsius: (val) => ((val - 32) * 5) / 9,
        fahrenheit: 1,
        kelvin: (val) => ((val - 32) * 5) / 9 + 273.15,
      },
      kelvin: {
        celsius: (val) => val - 273.15,
        fahrenheit: (val) => ((val - 273.15) * 9) / 5 + 32,
        kelvin: 1,
      },
    },
    weight: {
      kilograms: {
        kilograms: 1,
        grams: 1000,
        pounds: 2.20462,
        ounces: 35.274,
      },
      grams: {
        kilograms: 0.001,
        grams: 1,
        pounds: 0.00220462,
        ounces: 0.035274,
      },
      pounds: {
        kilograms: 0.453592,
        grams: 453.592,
        pounds: 1,
        ounces: 16,
      },
      ounces: {
        kilograms: 0.0283495,
        grams: 28.3495,
        pounds: 0.0625,
        ounces: 1,
      },
    },
  };

  const handleConversion = () => {
    if (!input || isNaN(input)) return; // If input is empty or not a number, do nothing

    let result = 0;
    if (category === "length") {
      result = input * conversionFormulas.length[fromUnit][toUnit];
    } else if (category === "temperature") {
      result = conversionFormulas.temperature[fromUnit][toUnit](parseFloat(input));
    } else if (category === "weight") {
      result = input * conversionFormulas.weight[fromUnit][toUnit];
    }

    setOutput(result.toFixed(2)); // Display result with two decimal places
  };

  // Initialize the useNavigate hook for back button functionality
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Unit Converter</h1>
      <div className="flex flex-col space-y-4">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          className="p-4 rounded-md shadow-md border border-gray-300"
        />
        <div className="flex space-x-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-4 rounded-md shadow-md border border-gray-300"
          >
            <option value="length">Length</option>
            <option value="temperature">Temperature</option>
            <option value="weight">Weight</option>
          </select>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="p-4 rounded-md shadow-md border border-gray-300"
          >
            {Object.keys(conversionFormulas[category]).map((unit) => (
              <option key={unit} value={unit}>
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </option>
            ))}
          </select>
          <span className="text-xl">to</span>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="p-4 rounded-md shadow-md border border-gray-300"
          >
            {Object.keys(conversionFormulas[category]).map((unit) => (
              <option key={unit} value={unit}>
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConversion}
          className="bg-blue-500 text-white p-4 rounded-md shadow-md"
        >
          Convert
        </button>
        <div className="text-xl mt-4">
          <p>
            Converted Value:{" "}
            <span className="font-bold">{output}</span>
          </p>
        </div>
      </div>
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}  // Navigate to the previous route
        className="bg-gray-500 text-white p-2 rounded-md shadow-md mt-4 self-center"
      >
        Back
      </button>
    </div>
  );
};

export default UnitConverter;
