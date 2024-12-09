import React from 'react';
import { useTasks } from './TaskContext.jsx';
import TaskItem from './TaskItem.jsx';

function TaskList() {
  const { tasks } = useTasks();

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
