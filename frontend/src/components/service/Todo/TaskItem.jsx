import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="task-card flex justify-between items-center p-4 mb-4 bg-white shadow-lg rounded-lg border-2 border-gray-200 hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-80 md:w-96 mx-auto">
      <div
        className={`flex items-center gap-4 cursor-pointer ${task.completed ? "text-gray-500 line-through" : "text-black"}`}
        onClick={() => toggleComplete(task.id)}
      >
        <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
        <span>{task.name}</span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-200 transform hover:scale-110"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
