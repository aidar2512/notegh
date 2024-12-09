import React from 'react';
import { useTasks } from './TaskContext';

function TaskItem({ task }) {
  const { deleteTask } = useTasks();

  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <span>{task}</span>
      <button onClick={() => deleteTask(task)} style={{ padding: '4px 8px' }}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
