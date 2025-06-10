import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";
import BackButton from "./BackButton";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Fetch tasks from localStorage on page load
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 pb-12">
      <BackButton />
      <div className="flex flex-col items-center p-6 bg-blue-50 shadow-md rounded-md mb-8">
        <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
        <AddTask addTask={addTask} />
        <TaskFilter setFilter={setFilter} />
      </div>
      <div className="flex-grow p-6">
        <TaskList
          tasks={filteredTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
     
    </div>
  );
};

export default TodoApp;
