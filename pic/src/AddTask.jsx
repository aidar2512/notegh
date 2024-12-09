import React, { useState } from 'react';
import { useTasks } from './TaskContext';

function AddTask() {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: '8px', width: '70%', marginRight: '10px' }}
      />
      <button onClick={handleAddTask} style={{ padding: '8px 16px' }}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
