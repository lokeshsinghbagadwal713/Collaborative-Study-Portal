import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");  // Reset input field
    }
  };

  return (
    <form className="flex items-center gap-4 mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border-2 border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-6 rounded-lg transition transform hover:bg-blue-600 hover:scale-105"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
