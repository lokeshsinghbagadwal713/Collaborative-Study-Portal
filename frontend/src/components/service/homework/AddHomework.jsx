import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const AddHomework = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const history = useNavigate();

  const handleAdd = () => {
    if (title && dueDate) {
      console.log({ title, dueDate, status: 'Incomplete' }); // You can save this in a state or local storage
      history('/homework');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Homework</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Homework Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
        >
          Add Homework
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default AddHomework;
