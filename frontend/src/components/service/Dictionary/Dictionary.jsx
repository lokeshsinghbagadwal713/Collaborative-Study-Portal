import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import WordDetails from "./WordDetails";

const Dictionary = () => {
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchWordData = async (word) => {
    try {
      setError("");
      setWordData(null);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        throw new Error("Word not found");
      }

      const data = await response.json();
      setWordData(data[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Dictionary</h1>
      <SearchBar onSearch={fetchWordData} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {wordData && <WordDetails wordData={wordData} />}
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-8 bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default Dictionary;
