import React from "react";

const WordDetails = ({ wordData }) => {
  const { word, phonetics, meanings } = wordData;

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-blue-800 capitalize">{word}</h2>
      {phonetics.length > 0 && (
        <div className="mt-2 text-gray-700">
          <p>
            <span className="font-semibold">Phonetics:</span>{" "}
            {phonetics[0]?.text || "N/A"}
          </p>
          {phonetics[0]?.audio && (
            <audio controls className="mt-2">
              <source src={phonetics[0].audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}

      <div className="mt-4">
        {meanings.map((meaning, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Part of Speech: {meaning.partOfSpeech}
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {meaning.definitions.map((def, i) => (
                <li key={i}>{def.definition}</li>
              ))}
            </ul>
            {meaning.synonyms?.length > 0 && (
              <p className="mt-2">
                <span className="font-semibold">Synonyms:</span>{" "}
                {meaning.synonyms.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordDetails;
