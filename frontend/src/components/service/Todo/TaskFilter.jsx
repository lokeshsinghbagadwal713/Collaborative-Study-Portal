import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
  const filters = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="flex justify-center gap-4 mt-4">
      {filters.map((item) => (
        <button
          key={item.value}
          onClick={() => setFilter(item.value)}
          className={`px-4 py-2 rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${
            filter === item.value
              ? "bg-orange-700 text-white"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
