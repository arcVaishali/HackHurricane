import React, { useState } from 'react';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = {
      day: prompt('Enter day:'),
      date: prompt('Enter date:'),
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleTaskChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="text-white text-center">
      <h1 className="text-4xl font-bold text-#ADD8E6 -800 mb-8">Todo List</h1>
      <button
        className="bg-blue-500 hover:bg-#ADD8E6 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <ul className="list-none p-0">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-gradient-to-r from-blue-800 to-blue-600 p-4 mb-4 rounded shadow-md transition-transform duration-300 hover:scale-105"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskChange(index)}
              className="mr-4 transform scale-125"
            />
            <span>{`${task.day} - ${task.date}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;