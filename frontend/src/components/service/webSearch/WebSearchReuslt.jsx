import React from 'react'

function WebSearchReuslt({ results }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {results.map((result) => (
                <div key={result.id} className="border p-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-semibold">
                        {result.title}
                    </h2>
                    <p className="text-gray-700">
                        {result.snippet}
                    </p>
                    <a href={result.link} className="text-blue-500 hover:underline">
                        Read More
                    </a>
                </div>
            )
            )}
        </div>
    );
}

export default WebSearchReuslt