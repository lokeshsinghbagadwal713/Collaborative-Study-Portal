import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const HomeworkDashboard = () => {
  const [homeworkList, setHomeworkList] = useState([
    { id: 1, title: 'Math Homework', dueDate: '2024-12-10', status: 'Incomplete' },
    { id: 2, title: 'Science Project', dueDate: '2024-12-12', status: 'Complete' },
  ]);
  const [filter, setFilter] = useState('All');

  // Toggle status between "Complete" and "Incomplete"
  const toggleStatus = (id) => {
    setHomeworkList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, status: item.status === 'Complete' ? 'Incomplete' : 'Complete' } : item
      )
    );
  };

  // Filter the homework list based on the selected filter
  const filteredHomework = homeworkList.filter((item) => {
    if (filter === 'All') return true;
    return item.status === filter;
  });

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Homework</h1>

        {/* Add Homework Button */}
        <Link to="/services/homework/add">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
            Add New Homework
          </button>
        </Link>

        {/* Filters */}
        <div className="flex gap-4 mt-6">
          {['All', 'Complete', 'Incomplete'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-md ${
                filter === status ? 'bg-orange-700 text-white' : 'bg-gray-200 text-gray-800'
              } hover:bg-orange-600 hover:text-white transition`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Homework List */}
        <div className="mt-6 grid gap-4">
          {filteredHomework.length > 0 ? (
            filteredHomework.map((homework) => (
              <div
                key={homework.id}
                className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition"
              >
                {/* Homework Details */}
                <h2 className="text-lg font-bold text-gray-800">{homework.title}</h2>
                <p className="text-sm text-gray-600">Due: {homework.dueDate}</p>
                <p
                  className={`text-sm font-semibold mt-2 ${
                    homework.status === 'Complete' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  Status: {homework.status}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => toggleStatus(homework.id)}
                    className={`px-4 py-2 rounded-md ${
                      homework.status === 'Complete' ? 'bg-red-500' : 'bg-green-500'
                    } text-white hover:bg-opacity-80 transition`}
                  >
                    {homework.status === 'Complete' ? 'Mark Incomplete' : 'Mark Complete'}
                  </button>
                  <Link
                    to={`/services/homework/${homework.id}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No homework found for this filter.</p>
          )}
        </div>
      </div>

      {/* Back Button */}
      <BackButton />
    </div>
  );
};

export default HomeworkDashboard;
