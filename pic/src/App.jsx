import React from 'react';
import TaskList from './TaskList.jsx';
import { TaskProvider } from './TaskContext.jsx';
import AddTask from './AddTask.jsx';


function App() {
  return (
    <TaskProvider>
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
