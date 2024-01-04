import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

const Task = () => {
  const styles = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = {
      day: prompt("Enter day:"),
      date: prompt("Enter date:"),
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
    <div className="p-16">
      <animated.div
        className="col-span-12 grid grid-cols-12 justify-between items-start text-center text-black text-5xl font-bold capitalize my-8 p-4 border-b-[1px] border-gray-300"
        style={{ ...styles }}
      >
        <div className="col-span-10">TODO</div>
      <button
        className="bg-blue-500 text-sm hover:bg-#ADD8E6 text-white font-bold py-2 px-4 rounded mb-8 col-span-2"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      </animated.div>
      <ul className="list-none">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-gradient-to-r from-blue-800 to-blue-600 p-4 mb-4 rounded shadow-md transition-all hover:bg-transparent hover:text-blue duration-200 delay-150"
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
