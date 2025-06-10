import React from 'react';
import { Link } from 'react-router-dom';

const HomeworkItem = ({ homework }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{homework.title}</h2>
      <p className="text-gray-600">Due Date: {homework.dueDate}</p>
      <p className={`text-sm mt-2 ${homework.status === 'Complete' ? 'text-green-600' : 'text-red-600'}`}>
        {homework.status}
      </p>
      <Link to={`/homework/${homework.id}`}>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default HomeworkItem;
