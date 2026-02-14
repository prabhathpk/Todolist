import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const id = Date.now().toString();
    setTasks((s) => [...s, { ...task, id }]);
  };

  const updateTask = (id, updated) => {
    setTasks((s) => s.map((t) => (t.id === id ? { ...t, ...updated } : t)));
  };

  const deleteTask = (id) => {
    setTasks((s) => s.filter((t) => t.id !== id));
  };
const filterTask = (fromDate, toDate) => {
  return tasks.filter((t) => t.date >= fromDate && t.date <= toDate);
};


  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask,filterTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
