import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete task 1', completed: false },
    { id: 2, title: 'Finish task 2', completed: true },
    // Add more tasks as needed
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length + 1, title, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task Management</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
