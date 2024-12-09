import { useState } from 'react';

export function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return {
    tasks,
    addTask,
    deleteTask
  };
}
