// src/components/Homework/HomeworkCard.jsx
import React from "react";

const HomeworkCard = ({ task, onUpdate, onDelete }) => {
  const toggleCompletion = () => {
    onUpdate(task.id, { ...task, completed: !task.completed });
  };

  const toggleInProgress = () => {
    onUpdate(task.id, { ...task, inProgress: !task.inProgress });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="text-gray-600">{task.subject}</p>
      <p className="text-gray-500">{task.deadline}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            task.completed ? "bg-green-500 text-white" : "bg-gray-300"
          }`}
          onClick={toggleCompletion}
        >
          {task.completed ? "Completed" : "Mark as Done"}
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            task.inProgress ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={toggleInProgress}
        >
          {task.inProgress ? "In Progress" : "Start"}
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HomeworkCard;
