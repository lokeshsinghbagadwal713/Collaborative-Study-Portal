import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="task-list flex flex-col gap-6">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
