import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './BackButton';

const HomeworkDetails = () => {
  const { id } = useParams();

  const homework = {
    id: id,
    title: 'Sample Homework',
    dueDate: '2024-12-10',
    description: 'Complete exercises 1 to 10 from the textbook.',
    status: 'Incomplete',
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{homework.title}</h1>
        <p className="text-gray-700 mb-4">Due Date: {homework.dueDate}</p>
        <p className="text-gray-600">{homework.description}</p>
        <p className={`mt-4 ${homework.status === 'Complete' ? 'text-green-600' : 'text-red-600'}`}>
          {homework.status}
        </p>
      </div>
      <BackButton />
    </div>
  );
};

export default HomeworkDetails;
